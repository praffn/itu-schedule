import ical from "ical.js";
import { sameDate } from "./util/date";

function flattenEvent(evt) {
  const event = {};
  for (let i = 0; i < evt[1].length; i++) {
    event[evt[1][i][0]] = evt[1][i][3];
  }
  return event;
}

const R_AUD1 = /Aud 1/;
const R_AUD2 = /Aud 2/;
const R_AUD3 = /Aud 3/;
const R_AUD4 = /Aud 4/;

const R_ROOM_LIST = /Room: .*/;

function mapLocation(loc) {
  if (R_AUD1.test(loc)) return "Aud 1";
  if (R_AUD2.test(loc)) return "Aud 2";
  if (R_AUD3.test(loc)) return "Aud 3";
  if (R_AUD4.test(loc)) return "Aud 4 (4A60)";

  if (R_ROOM_LIST) {
    return loc
      .split(",")
      .map(l => l.replace("Room: ", ""))
      .join(", ");
  }
  return loc;
}

function mapName(name) {
  const match = name.match(/\s+:\s+([\w\s]+).\s([\d\w]+)/);
  return {
    course: match[1],
    courseId: match[2]
  };
}

function mapSummary(summary) {
  const splitted = summary.split(",");
  const { course, courseId } = mapName(splitted[1]);
  const lecturers = splitted.reduce((prev, curr) => {
    if (curr.startsWith(" Name: ")) {
      return [...prev, curr.replace(" Name: ", "")];
    }
    return prev;
  }, []);

  const activity = splitted.find(s => s.trim().startsWith("Activity: "));
  return {
    course,
    courseId,
    lecturers,
    activity: activity ? activity.replace("Activity: ", "").trim() : ""
  };
}

function prettyEvent(evt) {
  return {
    id: evt.uid,
    start: new Date(evt.dtstart),
    end: new Date(evt.dtend),
    location: mapLocation(evt.location),
    ...mapSummary(evt.summary)
  };
}

function getEventsFromICS(ics) {
  const events = ics[2].map(e => prettyEvent(flattenEvent(e)));
  return events.sort((a, b) => new Date(a.start) - new Date(b.start));
}

const scheduleIdIcsMap = {
  SWU3:
    "https://cloud.timeedit.net/itu/web/public/ri6159Z5QQZ96YQ50gQ4ZyQ9Zn550x6.ics"
};

export const scheduleIds = Object.keys(scheduleIdIcsMap);

export async function getSchedule(scheduleId) {
  if (!scheduleIdIcsMap[scheduleId])
    throw new Error(`${scheduleId} not a valid schedule id`);
  const response = await fetch(scheduleIdIcsMap[scheduleId]);
  const text = await response.text();
  const parsed = ical.parse(text);
  return getEventsFromICS(parsed);
}

export function groupSchedule(events) {
  return events.reduce((groups, currentEvent) => {
    const group = groups.find(g => sameDate(g.date, currentEvent.start));
    if (!group) {
      return [
        ...groups,
        {
          date: currentEvent.start,
          events: [currentEvent]
        }
      ];
    }
    return groups.map(g => {
      if (g.date === group.date) {
        return {
          ...g,
          events: [...g.events, currentEvent]
        };
      }
      return g;
    });
  }, []);
}

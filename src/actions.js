export const SET_SCHEDULE = "SET_SCHEDULE";
export function setSchedule(schedule) {
  return {
    type: SET_SCHEDULE,
    schedule
  };
}

export const TOGGLE_SHOW_OLD_EVENTS = "TOGGLE_SHOW_OLD_EVENTS";
export function toggleShowOldEvents() {
  return {
    type: TOGGLE_SHOW_OLD_EVENTS
  };
}

export const ADD_HIDDEN_COURSE = "ADD_HIDDEN_COURSE";
export function addHiddenCourse(courseId) {
  return {
    type: ADD_HIDDEN_COURSE,
    courseId
  };
}

export const REMOVE_HIDDEN_COURSE = "REMOVE_HIDDEN_COURSE";
export function removeHiddenCourse(courseId) {
  return {
    type: REMOVE_HIDDEN_COURSE,
    courseId
  };
}

export const RESET_HIDDEN_COURSES = "RESET_HIDDEN_COURSES";
export function resetHiddenCourses() {
  return {
    type: RESET_HIDDEN_COURSES
  };
}

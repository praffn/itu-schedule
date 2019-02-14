import React from "react";
import PropTypes from "prop-types";
import EventGroup from "./EventGroup";

const Schedule = ({ schedule, onHideCourse }) => {
  return (
    <div>
      {schedule.map(group => (
        <EventGroup
          key={group.date.toString()}
          {...group}
          onHideCourse={onHideCourse}
        />
      ))}
    </div>
  );
};

Schedule.propTypes = {
  schedule: PropTypes.array.isRequired,
  onHideCourse: PropTypes.func.isRequired
};

export default Schedule;

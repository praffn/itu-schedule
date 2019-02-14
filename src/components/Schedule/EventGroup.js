import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withStyles } from "@material-ui/core";

import { getDayName, getMonthName } from "../../util/date";
import Event from "./Event";

const EventGroup = ({ date, events, onHideCourse }) => (
  <Grid container direction="column" spacing={16}>
    <Grid item style={{ marginTop: "4rem" }}>
      <Typography variant="h2">{getDayName(date)}</Typography>
      <Typography variant="h5">
        {getMonthName(date)} {date.getDate()}
      </Typography>
    </Grid>
    <Grid item>
      <Grid container direction="column" spacing={16}>
        {events.map(evt => (
          <Grid item key={evt.id}>
            <Event {...evt} onHideCourse={onHideCourse} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

EventGroup.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  events: PropTypes.array.isRequired,
  onHideCourse: PropTypes.func.isRequired
};

export default EventGroup;

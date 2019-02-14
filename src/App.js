import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Switch,
  Tooltip,
  IconButton
} from "@material-ui/core";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

import {
  toggleShowOldEvents,
  setSchedule,
  addHiddenCourse,
  resetHiddenCourses
} from "./actions";
import { getSchedule, groupSchedule } from "./schedule";
import { isDateBeforeToday } from "./util/date";
import Schedule from "./components/Schedule";

export class AppContainer extends Component {
  async componentDidMount() {
    const schedule = groupSchedule(await getSchedule("SWU3"));
    this.props.setSchedule(schedule);
  }

  render() {
    const {
      showOldEvents,
      schedule,
      hiddenCourses,
      resetHiddenCourses
    } = this.props;

    const correctSchedule = schedule.reduce((all, group) => {
      const updatedEvents = group.events.filter(
        event => !hiddenCourses.includes(event.courseId)
      );
      if (updatedEvents.length === 0) return all;
      return [...all, { ...group, events: updatedEvents }];
    }, []);

    const updatedSchedule = showOldEvents
      ? correctSchedule
      : correctSchedule.filter(group => !isDateBeforeToday(group.date));

    return (
      <>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
              ITU Schedule
            </Typography>
            <Tooltip title="Reset hidden courses">
              <IconButton color="default" onClick={resetHiddenCourses}>
                <DeleteSweepIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Show old events">
              <Switch
                checked={showOldEvents}
                onChange={this.props.toggleShowOldEvents}
              />
            </Tooltip>
          </Toolbar>
        </AppBar>
        <main style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
          <Schedule
            hiddenCourses={this.props.hiddenCourses}
            schedule={updatedSchedule}
            onHideCourse={this.props.addHiddenCourse}
          />
        </main>
      </>
    );
  }
}

AppContainer.propTypes = {
  showOldEvents: PropTypes.bool.isRequired,
  toggleShowOldEvents: PropTypes.func.isRequired,
  schedule: PropTypes.array.isRequired,
  setSchedule: PropTypes.func.isRequired,
  resetHiddenCourses: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  showOldEvents: state.showOldEvents,
  schedule: state.schedule,
  hiddenCourses: state.hiddenCourses
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleShowOldEvents,
      setSchedule,
      addHiddenCourse,
      resetHiddenCourses
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);

import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  withStyles,
  CardHeader,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function formatHourMin(date) {
  const hours = date
    .getHours()
    .toString()
    .padStart(2, "0");
  const minutes = date
    .getMinutes()
    .toString()
    .padStart(2, "0");
  return `${hours}:${minutes}`;
}

const styles = {
  activity: {
    fontSize: 14
  },
  time: {
    fontSize: 18
  }
};

class Event extends Component {
  state = {
    moreButtonAnchorEl: null
  };

  constructor(props) {
    super(props);
    this.handleMoreClick = this.handleMoreClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleHideCourseClick = this.handleHideCourseClick.bind(this);
  }

  handleMoreClick(evt) {
    this.setState({ moreButtonAnchorEl: evt.currentTarget });
  }

  handleMenuClose() {
    this.setState({ moreButtonAnchorEl: null });
  }

  handleHideCourseClick() {
    this.props.onHideCourse(this.props.courseId);
  }

  render() {
    const {
      course,
      start,
      location,
      activity,
      courseId,
      classes,
      id,
      lecturers
    } = this.props;

    const { moreButtonAnchorEl } = this.state;
    const isMenuOpen = Boolean(moreButtonAnchorEl);

    return (
      <Card>
        <CardHeader
          title={
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h4">{course}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">{formatHourMin(start)}</Typography>
              </Grid>
            </Grid>
          }
          subheader={activity}
          action={
            <>
              <IconButton onClick={this.handleMoreClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                id={`menu-${id}`}
                anchorEl={moreButtonAnchorEl}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
              >
                <MenuItem onClick={this.handleHideCourseClick}>
                  Hide this course
                </MenuItem>
              </Menu>
            </>
          }
        />
        <CardContent>
          <Typography className={classes.location}>
            {location}
            <br />
            {lecturers.length > 0 ? lecturers.join(", ") : ""}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

Event.propTypes = {
  course: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  location: PropTypes.string,
  activity: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onHideCourse: PropTypes.func.isRequired
};

Event.defaultProps = {
  location: "No location",
  activity: "Misc."
};

export default withStyles(styles)(Event);

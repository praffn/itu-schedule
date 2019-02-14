import {
  SET_SCHEDULE,
  TOGGLE_SHOW_OLD_EVENTS,
  ADD_HIDDEN_COURSE,
  REMOVE_HIDDEN_COURSE,
  RESET_HIDDEN_COURSES
} from "./actions";

const initialState = {
  showOldEvents: false,
  schedule: [],
  hiddenCourses: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SCHEDULE:
      return {
        ...state,
        schedule: action.schedule
      };
    case TOGGLE_SHOW_OLD_EVENTS:
      return {
        ...state,
        showOldEvents: !state.showOldEvents
      };
    case ADD_HIDDEN_COURSE:
      return {
        ...state,
        hiddenCourses: [...state.hiddenCourses, action.courseId]
      };
    case REMOVE_HIDDEN_COURSE:
      return {
        ...state,
        hiddenCourses: state.hiddenCourses.filter(id => id !== action.courseId)
      };
    case RESET_HIDDEN_COURSES:
      return {
        ...state,
        hiddenCourses: []
      };
    default:
      return state;
  }
}

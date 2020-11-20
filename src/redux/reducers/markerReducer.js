import * as markerActions from "../actions/actionTypes";

export default function markerReducer(state = [], action) {
  switch (action.type) {
    case markerActions.ADD_MARKER:
      return [...state, action.marker];
    case markerActions.GET_MARKER:
      return state.filter(
        (m) =>
          m.latitude === action.marker.latitude &&
          m.longitude === action.marker.longitude
      );
    case markerActions.GET_MARKERS:
      return state;
    case markerActions.DELETE_MARKER:
      return state.filter(
        (m) =>
          m.latitude !== action.marker.latitude &&
          m.longitude !== action.marker.longitude
      );
    default:
      return state;
  }
}

import * as polygonActions from "../actions/actionTypes";

export default function polygonReducer(state = [], action) {
  switch (action.type) {
    case polygonActions.ADD_POLYGON_POINT:
      return {
        polygons: [...state.polygons],
        currentPolygon: [...state.currentPolygon, [...action.point]],
      };
    case polygonActions.ADD_CURRENT_POLYGON_TO_POLYGONS:
      return {
        polygons: [
          ...state.polygons,
          { coordinates: state.currentPolygon, note: action.note },
        ],
        currentPolygon: [],
      };
    case polygonActions.LOAD_POLYGONS:
      return {
        currentPolygon: [...state.currentPolygon],
        polygons: [...action.polygons],
      };
    default:
      return state;
  }
}

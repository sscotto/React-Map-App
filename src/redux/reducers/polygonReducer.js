import { polygon } from "leaflet";
import * as polygonActions from "../actions/actionTypes";

export default function polygonReducer(state = [], action) {
  switch (action.type) {
    case polygonActions.ADD_POLYGON_POINT:
      return {polygons: [...state.polygons], currentPolygon: [...state.currentPolygon, [...action.point]]};
    case polygonActions.ADD_CURRENT_POLYGON_TO_POLYGONS:
      return { polygons: [...state.polygons, [...state.currentPolygon] ], currentPolygon: [] };
    default:
      return state;
  }
}

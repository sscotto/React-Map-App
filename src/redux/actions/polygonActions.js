import * as polygonActions from "./actionTypes";

export function addPolygonPoint(point) {
  return { type: polygonActions.ADD_POLYGON_POINT, point };
}

export function addCurrentPolygonToPolygons(note) {
  return {
    type: polygonActions.ADD_CURRENT_POLYGON_TO_POLYGONS,
    note,
  };
}

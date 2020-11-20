import * as markerActions from "./actionTypes";

export function addMarker(marker) {
  return { type: markerActions.ADD_MARKER, marker };
}

export function getMarker(marker) {
  return { type: markerActions.GET_MARKER, marker };
}

export function getMarkers(){
  return {type: markerActions.GET_MARKERS } 
}

export function deleteMarkers(marker){
  return {type: markerActions.DELETE_MARKER, marker } 
}
import * as mapActions from "./actionTypes";

export function setCenterPosition(position){
    return { type: mapActions.SET_CENTER_POSITION, position};
}

export function tooglePolygonMode(polygonMode){
    return {type: mapActions.TOGGLE_POLYGON_MODE, polygonMode};
}
import * as mapActions from "../actions/actionTypes";
import { tooglePolygonMode } from "../actions/mapActions";

export default function mapReducer(state = [], action) {
  switch (action.type) {
    case mapActions.SET_CENTER_POSITION:
      return {
        ...state,
        centerPosition: {
          latitude: action.position.latitude,
          longitude: action.position.longitude,
        },
      };
    case mapActions.TOGGLE_POLYGON_MODE:
      return {
        ...state,
        polygonMode: !state.polygonMode ?? false
      }
    default:
      return state;
  }
}

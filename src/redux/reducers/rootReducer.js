import { combineReducers } from "redux";
import markers from "./markerReducer";
import mapSettings from "./mapReducer"
import polygonsData from "./polygonReducer";

const rootReducer = combineReducers({
  markers,
  mapSettings,
  polygonsData
});

export default rootReducer;
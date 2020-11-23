import L from "leaflet";
import load from "../../../assets/download.svg";

export const LoadIcon = new L.icon({
  iconUrl: load,
  iconRetinaUrl: load,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-candles-icon",
});

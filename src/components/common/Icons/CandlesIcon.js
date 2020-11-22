import L from "leaflet";
import candles from "../../../assets/velas.svg";

export const CandlesIcon = new L.icon({
  iconUrl: candles,
  iconRetinaUrl: candles,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-candles-icon",
});

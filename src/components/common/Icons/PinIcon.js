import L from "leaflet";
import pin from "../../../assets/pin.svg";

export const PinIcon = new L.icon({
  iconUrl: pin,
  iconRetinaUrl: pin,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-candles-icon",
});

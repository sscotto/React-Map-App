import React from "react";
import { MapContainer, Marker, Polygon, Popup, TileLayer } from "react-leaflet";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ComponentEventsHandler from "./ComponentEventsHandler";
import { Tooltip } from "react-leaflet";

const redOptions = { color: "red" };
const purpleOptions = { color: "purple" };

const center = [-34.705172, -58.329645];

const CustomMap = ({
  markers,
  setPositionClicked,
  currentPolygon,
  polygons,
}) => {
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
      <ComponentEventsHandler onPositionclicked={setPositionClicked} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {typeof markers !== undefined &&
        markers.map((p) => {
          return (
            <Marker position={[p.latitude, p.longitude]}>
              <Popup>{p.note}</Popup>
            </Marker>
          );
        })}
      {polygons.length > 0 &&
        polygons.map((p) => {
          return (
            <Polygon pathOptions={purpleOptions} positions={[...p.coordinates]}>
              {p.note && <Tooltip sticky>{p.note}</Tooltip>}
            </Polygon>
          );
        })}

      <Polygon pathOptions={redOptions} positions={currentPolygon} />
    </MapContainer>
  );
};

function mapStateToProps(state) {
  return {
    markers: state.markers,
    currentPolygon: state.polygonsData.currentPolygon,
    polygons: state.polygonsData.polygons,
  };
}

export default connect(mapStateToProps)(CustomMap);

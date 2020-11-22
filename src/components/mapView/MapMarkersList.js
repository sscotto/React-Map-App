import React from "react";
import { Marker, Popup } from "react-leaflet";
import { connect } from "react-redux";
import { IconBuilder } from "../common/Icons/IconBuilder";

const MapMarkersList = ({ markers }) => {
  return (
    <>
      {typeof markers !== undefined &&
        markers.map((p) => {
          return (
            <Marker
              position={[p.latitude, p.longitude]}
              icon={IconBuilder(p.icon)}
            >
              <Popup>{p.note}</Popup>
            </Marker>
          );
        })}
    </>
  );
};

function mapStateToProps(state) {
  return {
    markers: state.markers,
  };
}

export default connect(mapStateToProps)(MapMarkersList);

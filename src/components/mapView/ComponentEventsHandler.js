import React, { useState, useEffect } from "react";
import { useMapEvent } from "react-leaflet";
import { connect } from "react-redux";
import * as polygonActions from "../../redux/actions/polygonActions";
import * as mapActions from "../../redux/actions/mapActions";
import { bindActionCreators } from "redux";

function ComponentEventsHandler({
  centerLongitude,
  centerLatitude,
  polygonMode,
  addPolygonPoint,
  setCenter
}) {
  const map = useMapEvent("click", (e) => {
    if (!polygonMode) setCenter({latitude: e.latlng.lat, longitude: e.latlng.lng});
    if (!polygonMode) map.flyTo([e.latlng.lat, e.latlng.lng]);
    if (polygonMode) addPolygonPoint([e.latlng.lat, e.latlng.lng]);
  });

  useEffect(() => {
    if (
      centerLatitude !== undefined &&
      centerLongitude !== undefined &&
      centerLatitude !== null &&
      centerLongitude !== null && !polygonMode
    ) {
      map.flyTo([centerLatitude, centerLongitude]);
    }
  }, [centerLatitude, centerLongitude]);

  return null;
}

function mapStateToProps(state) {
  return {
    centerLongitude: state.mapSettings.centerPosition.longitude,
    centerLatitude: state.mapSettings.centerPosition.latitude,
    polygonMode: state.mapSettings.polygonMode,
    currentPolygon: state.polygonsData.currentPolygon,
  };
}

function mapDistatchToProps(dispatch) {
  return {
    addPolygonPoint: bindActionCreators(
      polygonActions.addPolygonPoint,
      dispatch
    ),
    setCenter: bindActionCreators(mapActions.setCenterPosition, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDistatchToProps
)(ComponentEventsHandler);

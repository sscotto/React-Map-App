import { Chip } from "@material-ui/core";
import React from "react";
import * as markerActions from "../../redux/actions/markerActions";
import * as centerActions from "../../redux/actions/mapActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const CustomChip = ({
  deleteMarker,
  centerMap,
  latitude,
  longitude,
  note,
}) => {
  return (
    <Chip
      key={`${latitude}${longitude}`}
      label={note}
      onDelete={() => {
        deleteMarker({ latitude, longitude });
      }}
      onClick={() => {
        centerMap({latitude, longitude});
      }}
    />
  );
};

function mapDistatchToProps(dispatch) {
  return {
    deleteMarker: bindActionCreators(markerActions.deleteMarkers, dispatch),
    centerMap: bindActionCreators(centerActions.setCenterPosition, dispatch)
  };
}

export default connect(null, mapDistatchToProps)(CustomChip);

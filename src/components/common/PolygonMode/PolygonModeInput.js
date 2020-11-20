import React, { useEffect } from "react";
import * as mapActions from "../../../redux/actions/mapActions";
import * as polygonsActions from "../../../redux//actions/polygonActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

const PolygonModeInput = ({ polygonMode, tooglePolygonMode, currentPolygon, addCurrentPolygonToPolygons }) => {
  useEffect(() => {
    if (polygonMode == false &&  currentPolygon.length > 1) {
      addCurrentPolygonToPolygons(currentPolygon);
    }
  }, [polygonMode]);

  return (
    <Button variant="contained" onClick={tooglePolygonMode}>
     {!polygonMode ? "Create Polygon" : "Save Polygon"}
    </Button>
  );
};

function mapStateToProps(state) {
  return {
    polygonMode: state.mapSettings.polygonMode,
    currentPolygon: state.polygonsData.currentPolygon,
    polygons: state.polygonsData.polygons,
  };
}

function mapDistatchToProps(dispatch) {
  return {
    tooglePolygonMode: bindActionCreators(
      mapActions.tooglePolygonMode,
      dispatch
    ),
    addCurrentPolygonToPolygons: bindActionCreators(
      polygonsActions.addCurrentPolygonToPolygons,
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDistatchToProps)(PolygonModeInput);

import React, { useEffect } from "react";
import * as mapActions from "../../../redux/actions/mapActions";
import * as polygonsActions from "../../../redux//actions/polygonActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button, Input } from "@material-ui/core";
import { useState } from "react";

const PolygonModeInput = ({
  polygonMode,
  tooglePolygonMode,
  currentPolygon,
  addCurrentPolygonToPolygons,
}) => {
  const [polygonNote, setPolygonNote] = useState("");
  useEffect(() => {
    if (polygonMode === false && currentPolygon.length > 1) {
      addCurrentPolygonToPolygons(polygonNote);
      setPolygonNote("");
    }
  }, [polygonMode, currentPolygon, addCurrentPolygonToPolygons, polygonNote]);

  const handleChange = (e) => {
    setPolygonNote(e.target.value);
  };

  return (
    <>
      <Button
        variant="contained"
        color={polygonMode ? "secondary" : ""}
        onClick={tooglePolygonMode}
      >
        {!polygonMode ? "Create Polygon" : "Save Polygon"}
      </Button>
      {polygonMode && (
        <Input
          placeholder="Polygon Tooltip Text"
          color="secondary"
          style={{ color: "white", marginLeft: "2px" }}
          onChange={(e) => handleChange(e)}
        />
      )}
    </>
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

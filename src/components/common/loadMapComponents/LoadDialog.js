import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as markerActions from "../../../redux/actions/markerActions";
import * as mapActions from "../../../redux/actions/mapActions";
import * as polygonActions from "../../../redux/actions/polygonActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoadDialog({ onClose, open, addMarker, loadPolygons, setCenter }) {
  const [mapSettings, setMapSettings] = useState(null);

  const showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      setMapSettings(JSON.parse(text));
    };
    reader.readAsText(e.target.files[0]);
  };

  const loadMap = () => {
    let markers = mapSettings.markers;
    let polygons = mapSettings.polygons;
    let center = mapSettings.center;
    markers.map((m) => addMarker(m));
    loadPolygons(polygons);
    setCenter(center);
    toast.success("Map Configuration Loaded");
    onClose();
  };

  return (
    <>
      <Dialog fullWidth={true} onClose={onClose} open={open}>
        <DialogTitle>Load Map</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>
              <input type="file" onChange={showFile} />
              <Button variant="contained" color="primary" onClick={loadMap}>
                Load Map Configuration
              </Button>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <ToastContainer />
    </>
  );
}

function mapDistatchToProps(dispatch) {
  return {
    addMarker: bindActionCreators(markerActions.addMarker, dispatch),
    loadPolygons: bindActionCreators(polygonActions.loadPolygons, dispatch),
    setCenter: bindActionCreators(mapActions.setCenterPosition, dispatch),
  };
}

export default connect(null, mapDistatchToProps)(LoadDialog);

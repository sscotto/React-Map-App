import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SaveDialog({ onClose, open, markers, polygons, center }) {
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    let mapData = {
      markers,
      polygons,
      center,
    };

    const file = new Blob([JSON.stringify(mapData)], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "mapConfig.json";
    document.body.appendChild(element);
    element.click();

    toast.success("Map Configuration Saved");
  };

  return (
    <Dialog fullWidth={true} onClose={onClose} open={open}>
      <DialogTitle>Save Map</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Button variant="contained" color="primary" onClick={downloadTxtFile}>
            Save Map Configuration
          </Button>
          <ToastContainer />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

function mapStateToProps(state) {
  return {
    markers: state.markers,
    center: state.mapSettings.centerPosition,
    polygons: state.polygonsData.polygons,
  };
}

export default connect(mapStateToProps)(SaveDialog);

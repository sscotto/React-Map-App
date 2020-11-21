import React, { useRef, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import * as markerActions from "../../redux/actions/markerActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Input } from "@material-ui/core";

const CoordinateInput = ({ addMarker, center }) => {
  const noteRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [note, setNote] = useState(null);

  const set = () => {
    addMarker({
      latitude: center.latitude,
      longitude: center.longitude,
      note: note,
    });
  };

  useEffect(() => {
    if (center.latitude !== undefined && center.longitude !== undefined) {
      setLatitude(center.latitude);
      setLongitude(center.longitude);
      setButtonDisable({
        latitude: center.latitude,
        longitude: center.longitude,
      });
    }
  }, [center.latitude, center.longitude]);

  const setButtonDisable = ({ latitude, longitude }) => {
    if (
      !isNaN(latitude) &&
      Number(latitude) !== 0 &&
      !isNaN(longitude) &&
      Number(longitude) !== 0
    )
      setDisabled(false);
    else setDisabled(true);
  };

  const changeLatitude = (e) => {
    setLatitude(e.target.value);
    setButtonDisable({ latitude: e.target.value, longitude });
  };

  const changeLongitude = (e) => {
    setLongitude(e.target.value);
    setButtonDisable({ latitude, longitude: e.target.value });
  };

  const changeNote = (e) => {
    setNote(e.target.value);
  };

  return (
    <div>
      <Input
        placeholder="Latitude"
        color="secondary"
        style={{ color: "white", marginLeft: "2px" }}
        onChange={changeLatitude}
        value={latitude}
      ></Input>{" "}
      <Input
        placeholder="Longitude"
        color="secondary"
        style={{ color: "white", marginLeft: "2px" }}
        onChange={changeLongitude}
        value={longitude}
      ></Input>{" "}
      <Input
        ref={noteRef}
        placeholder="Note"
        color="secondary"
        style={{ color: "white", marginLeft: "2px" }}
        onChange={changeNote}
        value={note}
      ></Input>{" "}
      <Button variant="contained" onClick={set} disabled={disabled}>
        Add Mark
      </Button>{" "}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    markers: state.markers,
    center: state.mapSettings.centerPosition,
  };
}

function mapDistatchToProps(dispatch) {
  return {
    addMarker: bindActionCreators(markerActions.addMarker, dispatch),
  };
}

export default connect(mapStateToProps, mapDistatchToProps)(CoordinateInput);

CoordinateInput.propTypes = {
  addMarker: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired,
  positionClicked: PropTypes.object.isRequired,
};

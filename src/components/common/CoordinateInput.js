import React, { useRef, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import * as markerActions from "../../redux/actions/markerActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const CoordinateInput = ({ addMarker, center }) => {
  const noteRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const set = () => {
    addMarker({
      latitude: center.latitude,
      longitude: center.longitude,
      note: noteRef.current.value,
    });
  };

  useEffect(() => {
    if (center.latitude !== undefined && center.longitude != undefined) {
      setLatitude(center.latitude);
      setLongitude(center.longitude);
      setButtonDisable({
        latitude: center.latitude,
        longitude: center.longitude,
      });
    }
  }, [center.latitude, center.longitude ]);

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

  return (
    <div>
      Latitude:
      <input
        type="text"
        id="latitude"
        name="latitude"
        onChange={changeLatitude}
        value={latitude}
      ></input>{" "}
      Longitude:
      <input
        type="text"
        id="longitude"
        name="longitude"
        onChange={changeLongitude}
        value={longitude}
      ></input>{" "}
      Note: <input ref={noteRef} type="text" id="note" name="longitude"></input>{" "}
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

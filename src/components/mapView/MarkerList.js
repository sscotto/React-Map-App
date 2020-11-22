import React from "react";
import CustomChip from "./CustomChip";
import { connect } from "react-redux";

const MarkerList = ({ markers }) => {
  return markers.map((p) => {
    return <CustomChip {...p}></CustomChip>;
  });
};

function mapStateToProps(state) {
  return {
    markers: state.markers,
  };
}

export default connect(mapStateToProps)(MarkerList);

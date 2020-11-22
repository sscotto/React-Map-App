import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React from "react";
import { bindActionCreators } from "redux";
import { icons } from "../IconsArray";
import * as mapActions from "../../../../redux/actions/mapActions";
import { connect } from "react-redux";

function IconsDialog({ onClose, open, selectIcon }) {
  const handleIconClick = (e) => {
    let selectedIcon = e.target.alt;
    selectIcon(selectedIcon);
    onClose();
  };

  return (
    <Dialog fullWidth={true} onClose={onClose} open={open}>
      <DialogTitle>Icons</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {icons.map((i) => (
            <img
              key={i.name}
              style={{ width: "50px", padding: "2px" }}
              alt={i.name}
              src={i.icon}
              onClick={handleIconClick}
            ></img>
          ))}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

function mapStateToProps(state) {
  return {
    selectedIcon: state.mapSettings.selectedIcon,
  };
}

function mapDistatchToProps(dispatch) {
  return {
    selectIcon: bindActionCreators(mapActions.selectMarkerIcon, dispatch),
  };
}

export default connect(mapStateToProps, mapDistatchToProps)(IconsDialog);

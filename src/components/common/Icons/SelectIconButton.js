import { Button } from "@material-ui/core";
import React from "react";
import { icons } from "./IconsArray";
import { connect } from "react-redux";

function SelectIconButton({ handleClickOpen, selectedIcon }) {
  return (
    <>
      <Button onClick={handleClickOpen} variant="contained">
        Select Icon{" "}
        {icons
          .filter((i) => i.name === selectedIcon)
          .map((i) => {
            return (
              <img
                style={{ width: "25px", marginLeft: "5px" }}
                alt={i.name}
                src={i.icon}
              ></img>
            );
          })}
      </Button>
    </>
  );
}

function mapStateToProps(state) {
  return {
    selectedIcon: state.mapSettings.selectedIcon,
  };
}

export default connect(mapStateToProps)(SelectIconButton);

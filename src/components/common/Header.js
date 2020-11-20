import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import CoordinateInput from "./CoordinateInput";
import PolygonModeInput from "./PolygonMode/PolygonModeInput";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{margin: "margin:0 10px"}}>
        <CoordinateInput />
        <PolygonModeInput />
      </Toolbar>
    </AppBar>
  );
};

import { AppBar, Toolbar, Fade, Grid } from "@material-ui/core";
import React from "react";
import CoordinateInput from "./CoordinateInput";
import PolygonModeInput from "./PolygonMode/PolygonModeInput";
import { connect } from "react-redux";

const Header = ({ polygonMode }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={polygonMode ? 12 : 2}>
            <PolygonModeInput />
          </Grid>

          <Grid item xs={10}>
            <Fade
              in={!polygonMode}
              timeout={500}
              style={{ display: polygonMode ? "none" : "block" }}
            >
              <div>
                <CoordinateInput />
              </div>
            </Fade>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

function mapStateToProps(state) {
  return {
    polygonMode: state.mapSettings.polygonMode,
  };
}

export default connect(mapStateToProps)(Header);

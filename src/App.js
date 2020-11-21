import "./App.css";
import { Grid } from "@material-ui/core";
import MarkerList from "./components/mapView/MarkerList";
import CustomMap from "./components/mapView/CustomMap";
import Header from "./components/common/Header";

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={10}>
        <CustomMap />
      </Grid>
      <Grid xs={2} style={{ backgroundColor: "#2B3A90" }} spacing={3}>
        <MarkerList></MarkerList>
      </Grid>
    </Grid>
  );
}

export default App;

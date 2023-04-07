import { Grid } from "@mui/material";
import Box from "@mui/material/Box/Box";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import React from "react";

const Loader = () => {
  return (
    <Grid item>
      <CircularProgress />
    </Grid>
  );
};

export default Loader;

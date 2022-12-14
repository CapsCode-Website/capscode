import React from "react";
import Grid from "@material-ui/core/Grid";

const WhatWeDo = () => {
  const BoxItem = {
    background: "red",
    flex: 1,
    border: "1px solid black",
  };
  return (
    <Grid container>
      <Grid item lg={4} md={12} sm={6} xs={6}>
        {/* <img /> */}
        <h3>We teach code</h3>
        <p></p>
      </Grid>

      <Grid item lg={4} md={12} sm={6} xs={6}>
        {/* <img /> */}
        <h3>We build website</h3>
        <p></p>
      </Grid>

      <Grid item lg={4} md={12} sm={6} xs={6}>
        {/* <img /> */}
        <h3>We setup google business</h3>
        <p></p>
      </Grid>
    </Grid>
  );
};

export default WhatWeDo;

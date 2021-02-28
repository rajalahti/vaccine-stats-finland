import React from "react";
import { Typography } from "@material-ui/core";

// This function converts a number to use thousand separators
function thousandSeparator(x) {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
}

export default function AverageSpeed(props) {
  const { averageShotsLast14Days } = props.data;
  return (
    <section
      style={{
        width: "100%",
        padding: '120px 0px',
        backgroundColor: "#47484F",
        color: "white",
      }}
    >
      <Typography variant="h4" component="h2">
        Rokotuksia on annettu keskimäärin{" "}
        {thousandSeparator(averageShotsLast14Days)} kpl/vrk viimeisen kahden
        viikon aikana.
      </Typography>
    </section>
  );
}

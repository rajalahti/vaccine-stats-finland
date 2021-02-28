import React, { useEffect, useState } from "react";
import { getData } from "../../utils/api";
import TotalDisplays from "../TotalDisplays/TotalDisplays";
import Timeline from "../Timeline/Timeline";
import Linechart from "../Linechart/Linechart";
import AverageSpeed from "../AverageSpeed/AverageSpeed";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import { CircularProgress } from "@material-ui/core";

export default function Charts() {
  const [data, setData] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData().then((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={50} />
        </div>
      ) : (
        <React.Fragment>
          <Pulse>
            <TotalDisplays data={data} />
          </Pulse>
          <Fade>
            <Timeline data={data} />
          </Fade>
          <Fade>
            <AverageSpeed data={data} />
          </Fade>
          <Fade>
            <Linechart data={data} />
          </Fade>
        </React.Fragment>
      )}
    </div>
  );
}

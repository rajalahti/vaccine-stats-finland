import React, { useEffect, useState } from "react";
import { getData } from "../../utils/api";
import TotalDisplays from "../TotalDisplays/TotalDisplays";
import Timeline from "../Timeline/Timeline";
import Linechart from "../Linechart/Linechart";
import AverageSpeed from "../AverageSpeed/AverageSpeed";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

export default function Charts() {
  const [data, setData] = useState({});

  useEffect(() => {
    getData().then((response) => setData(response));
  }, []);

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
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
    </div>
  );
}

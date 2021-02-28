import React, { useEffect, useState } from "react";
import { getData } from '../../utils/api';
import TotalDisplays from '../TotalDisplays/TotalDisplays';
import Timeline from '../Timeline/Timeline';
import Linechart from '../Linechart/Linechart';
import AverageSpeed from '../AverageSpeed/AverageSpeed';

export default function Charts() {

    const [data, setData] = useState({});

    useEffect(()=> {
      getData()
      .then(response => setData(response));
    }, [])

  return (
    <div style={{backgroundColor: 'whitesmoke'}}>
      <TotalDisplays data={data} />
      <Timeline data={data} />
      <AverageSpeed data={data} />
      <Linechart data={data} />
    </div>
  );
}

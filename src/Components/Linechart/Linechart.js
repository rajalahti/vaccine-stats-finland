import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [],
  datasets: [
    {
      label: "Koronarokotuksia annettu",
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(63, 191, 191, 0.7)',
      borderColor: 'rgba(63, 191, 191, 1)',
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: 'rgba(63, 191, 191, 1)',
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    },
  ],
};

const options = {
  tooltips: {
    mode: "index",
  },
  legend: {
    labels: {
      // This more specific font property overrides the global property
      defaultFontFamily: "'Roboto', 'sans-serif'",
    },
  },
  animation: {
    duration: 2000,
  },
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
          fontSize: 14,
          color: 'black',
          callback: function (value, index, values) {
            return (value) + " %";
          },
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
        ticks: {
          fontSize: 14,
          color: 'black',
          display: true,
          autoSkip: true,
          maxTicksLimit: 8,
        },
      },
    ],
  },
};

export default function Linechart(props) {
  data.labels = props.data.dates && props.data.dates.map((date) => date.date.slice(0, 5).replace('/','.'));
  data.datasets[0].data =
    props.data.dates && props.data.dates.map((date) => date.percentage);
  return (
    <figure>
      <Line data={data} options={options} />
    </figure>
  );
}

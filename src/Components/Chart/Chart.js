import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {

    const maximumValue = props.dataPoints.map(datapoint => datapoint.value);
    const valueMax = Math.max(...maximumValue);
  return (
    <div  className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={valueMax}
          label={datapoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;

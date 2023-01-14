import React from "react";

import PropTypes from "prop-types";

import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const data = props.datas;

  const getValueFromData = data.map((values) => values.value);

  const getMaxValue = Math.max(...getValueFromData);
  return (
    <div className="chart">
      {data.map((dataset) => (
        <ChartBar
          key={dataset.label}
          value={dataset.value}
          maxValue={getMaxValue}
          label={dataset.label}
        />
      ))}
    </div>
  );
};

Chart.propTypes = {
  datas: PropTypes.array,
};

export default Chart;

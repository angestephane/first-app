import React from "react";

import PropTypes from "prop-types";

import Chart from "../graphe/Chart";

const DepenseGraph = (props) => {
  const dataSet = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Avr", value: 0 },
    { label: "Mai", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Juil", value: 0 },
    { label: "Août", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const depense of props.depenses) {
    const monthIndex = depense.date.getMonth();
    dataSet[monthIndex].value = depense.prix;
  }

  return <Chart datas={dataSet}></Chart>;
};

DepenseGraph.propTypes = {
  depenses: PropTypes.array,
};

export default DepenseGraph;

import React, {useState} from "react";
import Chart from "./Chart/Chart";
import DepenseFilter from "./Filter/DepenseFilter";
import PropTypes from "prop-types";
import Card from "../Card/Card";

import "./Stats.css";

const Stats = (props) => {
  const dataSet = [
    {label: "Jan", value: 0},
    {label: "Feb", value: 0},
    {label: "Mar", value: 0},
    {label: "Avr", value: 0},
    {label: "Mai", value: 0},
    {label: "Jun", value: 0},
    {label: "Juil", value: 0},
    {label: "Août", value: 0},
    {label: "Sep", value: 0},
    {label: "Oct", value: 0},
    {label: "Nov", value: 0},
    {label: "Dec", value: 0},
  ];

  //Year state management
  const [yearSelected, setYearSelected] = useState("2022");

  //Get User Date Selected
  const dateFilterHandler = (__dateSelected) => {
    setYearSelected(__dateSelected);
  };

  const expenses = props.datas.filter((data) => {
    return data.date.getFullYear().toString() === yearSelected;
  });

  for (const depense of expenses) {
    const monthIndex = depense.date.getMonth();
    dataSet[monthIndex].value = depense.prix;
  }

  return (
    <Card className="stats-card">
      <DepenseFilter onDateFilter={dateFilterHandler} selected={yearSelected} />
      <Chart datas={dataSet} />
    </Card>
  );
};

Stats.propTypes = {
  datas: PropTypes.array,
};

export default Stats;

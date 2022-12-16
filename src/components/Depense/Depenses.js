import React, { useState } from "react";
import PropTypes from "prop-types";

import Card from "../Card/Card";
import DepenseFilter from "../Depense_filter/DepenseFilter";
import ListDepense from "./ListeDepense";
import "./Depenses.css";
import DepenseGraph from "./DepenseGraph";

const Depenses = (props) => {
  //State management
  const [yearSelected, setYearSelected] = useState("2022");

  //Fonctions
  const dateFilterHandler = (__dateSelected) => {
    setYearSelected(__dateSelected);
  };

  //Variables
  const data = props.data;
  const tmpData = data.filter((depense) => {
    return depense.date.getFullYear().toString() === yearSelected;
  });

  //Code JSX
  return (
    <Card className="depenses">
      <DepenseFilter selected={yearSelected} onDateFilter={dateFilterHandler} />
      <DepenseGraph depenses={tmpData} />
      <ListDepense items={tmpData} />
    </Card>
  );
};

Depenses.propTypes = {
  data: PropTypes.array,
};
export default Depenses;

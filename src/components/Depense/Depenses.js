import React, { useState } from "react";
import PropTypes from "prop-types";

import Card from "../Card/Card";
import DepenseItem from "../Depense_item_component/DepenseItem";
import DepenseFilter from "../Depense_filter/DepenseFilter";
import "./Depenses.css";

const Depenses = (props) => {
  //State management
  const [yearSelected, setYearSelected] = useState("2019");

  //Fonctions
  const dateFilterHandler = (__dateSelected) => {
    console.log(__dateSelected);
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
      {tmpData.map((depense) => (
        <DepenseItem
          key={depense.id}
          title={depense.title}
          prix={depense.prix}
          date={depense.date}
        />
      ))}
    </Card>
  );
};

Depenses.propTypes = {
  data: PropTypes.array,
};
export default Depenses;

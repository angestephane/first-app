import React, { useState } from "react";

import Card from "../Card/Card";
import DepenseItem from "../Depense_item_component/DepenseItem";
import DepenseFilter from "../Depense_filter/DepenseFilter";
import "./Depenses.css";
const Depenses = (props) => {
  //State management
  const [yearSelected, setYearSelected] = useState("2019");

  //Fonctions
  const dateFilterHandler = (__dateSelected) => {
    setYearSelected(__dateSelected);
  };

  //Code JSX
  return (
    <Card className="depenses">
      <DepenseFilter selected={yearSelected} onDateFilter={dateFilterHandler} />
      <DepenseItem
        title={props.data[0].designationDepense}
        somme={props.data[0].somme}
        date={props.data[0].date}
      />
      <DepenseItem
        title={props.data[1].designationDepense}
        somme={props.data[1].somme}
        date={props.data[1].date}
      />

      <DepenseItem
        title={props.data[2].designationDepense}
        somme={props.data[2].somme}
        date={props.data[2].date}
      />

      <DepenseItem
        title={props.data[3].designationDepense}
        somme={props.data[3].somme}
        date={props.data[3].date}
      />
    </Card>
  );
};

export default Depenses;

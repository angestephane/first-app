import React from "react";
import PropTypes from "prop-types";

import Card from "../Card/Card";
import ListDepense from "./ListeDepense";
import "./Depenses.css";

const Depenses = (props) => {
  //Variables
  const data = props.data;

  //Code JSX
  return (
    <Card className="depenses">
      <ListDepense items={data} />
    </Card>
  );
};

Depenses.propTypes = {
  data: PropTypes.array,
  year: PropTypes.object,
};
export default Depenses;

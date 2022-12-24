import React from "react";
import PropTypes from "prop-types";

import "./DepenseDate.css";

const DepenseDate = (props) => {
  //Faite une doc sur la méthode toLocaleString()
  const mois = props.date.toLocaleString("an-FR", { month: "long" });
  const jour = props.date.toLocaleString("fr-FR", { day: "2-digit" });
  const annee = props.date.getFullYear();

  return (
    <div className="depense-date">{mois}. {jour}. {annee}</div>
  );
};

DepenseDate.propTypes = {
  date: PropTypes.object,
};

export default DepenseDate;

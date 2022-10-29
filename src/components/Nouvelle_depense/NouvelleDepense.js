import React from "react";

import PropTypes from "prop-types";

import DepenseForm from "./DepenseForm";
import "./NouvelleDepense.css";

const NouvelleDepense = (props) => {
  const depenseHandler = (depense) => {
    const newDepense = {
      ...depense,
      id: Math.random(),
    };
    props.getNewDepense(newDepense);
  };

  return (
    <div className="new-expense">
      <DepenseForm onSaveDepenseData={depenseHandler} />
    </div>
  );
};

NouvelleDepense.propTypes = {
  getNewDepense: PropTypes.func,
};

export default NouvelleDepense;

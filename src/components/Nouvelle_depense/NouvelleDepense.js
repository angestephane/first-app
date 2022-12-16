import React from "react";
import { useState } from "react";

import PropTypes from "prop-types";

import DepenseForm from "./DepenseForm";
import Card from "../Card/Card";
import "./NouvelleDepense.css";

const NouvelleDepense = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handlerForme = () => {
    setIsOpen(false);
  };

  const closeForm = () => {
    setIsOpen(true);
  };

  const __displayForm = (
    <Card className="new-expense">
      <button onClick={handlerForme}>Ajouter une dépense</button>
    </Card>
  );

  if (isOpen) return __displayForm;

  const depenseHandler = (depense) => {
    const newDepense = {
      ...depense,
      id: Math.random(),
    };
    props.getNewDepense(newDepense);
    setIsOpen(true);
  };

  return (
    <div className="new-expense">
      <DepenseForm onSaveDepenseData={depenseHandler} onCancel={closeForm} />
    </div>
  );
};

NouvelleDepense.propTypes = {
  getNewDepense: PropTypes.func,
};

export default NouvelleDepense;

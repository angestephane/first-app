import React from "react";
import { useState } from "react";

import PropTypes from "prop-types";

import "./DepenseForm.css";

const DepenseForm = (props) => {
  const [titre, setInputTitle] = useState("");
  const [prix, setInputPrice] = useState("");
  const [date, setInputDate] = useState("");

  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setInputPrice(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const depenseData = {
      title: titre,
      prix: prix,
      date: new Date(date),
    };

    props.onSaveDepenseData(depenseData);

    setInputTitle("");
    setInputPrice("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Titre </label>
          <input type="text" value={titre} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label> Prix </label>
          <input
            type="number"
            min="1"
            step="1"
            value={prix}
            onChange={priceChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-10-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Ajouter depense</button>
      </div>
    </form>
  );
};

DepenseForm.propTypes = {
  onSaveDepenseData: PropTypes.func,
};

export default DepenseForm;

import React from "react";
import PropTypes from "prop-types";
import "./DepenseFilter.css";

const DepenseFilter = (props) => {
  //Fonctions
  const dateFilterHandler = (event) => {
    props.onDateFilter(event.target.value);
  };

  //Code JSX
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dateFilterHandler} value={props.selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

DepenseFilter.propTypes = {
  onDateFilter: PropTypes.func,
  selected: PropTypes.string,
};

export default DepenseFilter;

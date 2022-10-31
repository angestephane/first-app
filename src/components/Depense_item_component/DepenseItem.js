import React from "react";
import PropTypes from "prop-types";
import "./DepenseItem.css";
import DepenseDate from "../Depense_date_component/DepenseDate";
import Card from "../Card/Card";

const DepenseItem = (props) => {
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <DepenseDate date={props.date} />
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.prix}DH</div>
    </Card>
  );
};

DepenseItem.propTypes = {
  date: PropTypes.object,
  title: PropTypes.string,
  prix: PropTypes.number,
};

export default DepenseItem;

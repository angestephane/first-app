import React from "react";
import DepenseItem from "../Depense_item_component/DepenseItem";

import "./ListeDepense.css";

import PropTypes from "prop-types";

const ListDepense = (props) => {
  const __notFoundContent = (
    <h2 className="expenses-list__fallback">
      Aucune dépense trouvée à cette date
    </h2>
  );

  if (props.items.length === 0) {
    return __notFoundContent;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((data) => (
        <DepenseItem
          key={data.id}
          title={data.title}
          prix={data.prix}
          date={data.date}
        />
      ))}
    </ul>
  );
};

ListDepense.propTypes = {
  items: PropTypes.array,
};

export default ListDepense;

import "./DepenseItem.css";
import DepenseDate from "../Depense_date_component/DepenseDate";

function DepenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <DepenseDate date={props.date} />
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.somme}DH</div>
    </div>
  );
}

export default DepenseItem;

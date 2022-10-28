import "./DepenseDate.css";

const DepenseDate = (props) => {
  //Faite une doc sur la méthode toLocaleString()
  const mois = props.date.toLocaleString("an-FR", { month: "long" });
  const jour = props.date.toLocaleString("fr-FR", { day: "2-digit" });
  const annee = props.date.getFullYear();

  return (
    <div className="depense-date">
      <div className="depense-date__mois">{mois}</div>
      <div className="depense-date__jour">{jour}</div>
      <div className="depense-date__annee">{annee}</div>
    </div>
  );
};

export default DepenseDate;

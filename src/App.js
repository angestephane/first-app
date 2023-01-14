import React, {useState} from "react";
import "./App.css";
import Depenses from "./components/Depense/Depenses";
import NouvelleDepense from "./components/Nouvelle_depense/NouvelleDepense";
import Stats from "./components/stats/Stats";

const DATA_FICTIVE = [
  {
    id: 1,
    title: "Restaurant Emma",
    prix: 350,
    date: new Date(2022, 10, 12),
    type: "Entrée",
  },
  {
    id: 2,
    title: "Nouvelle chaussure Nike",
    prix: 300,
    date: new Date(2021, 10, 12),
    type: "Entrée",
  },
  {
    id: 3,
    title: "Vacances avec Emma",
    prix: 5000,
    date: new Date(2019, 5, 6),
    type: "Entrée",
  },
  {
    id: 4,
    title: "Nouvelle Tv",
    prix: 2300,
    date: new Date(2022, 0, 15),
    type: "Sortie",
  },
];

function App() {
  //Data state management
  const [depenses, setDepenses] = useState(DATA_FICTIVE);

  const addDepense = (__depense) => {
    setDepenses((prevState) => [__depense, ...prevState]);
  };

  return (
    <div className="app">
      <div className="app-content">
        <div className="expense-liste">
          <NouvelleDepense getNewDepense={addDepense} />
          <Depenses data={depenses} />
        </div>
        <div className="right-side">
          <Stats datas={depenses} />
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Depenses from "./components/Depense/Depenses";
import NouvelleDepense from "./components/Nouvelle_depense/NouvelleDepense";

const DATA_FICTIVE = [
  {
    id: 1,
    title: "Restaurant Emma",
    prix: 350,
    date: new Date(2022, 10, 12),
  },
  {
    id: 2,
    title: "Nouvelle chaussure Nike",
    prix: 300,
    date: new Date(2021, 10, 12),
  },
  {
    id: 3,
    title: "Vacances avec Emma",
    prix: 5000,
    date: new Date(2019, 5, 6),
  },
  {
    id: 4,
    title: "Nouvelle Tv",
    prix: 2300,
    date: new Date(2022, 0, 15),
  },
];

function App() {
  const [depenses, setDepenses] = useState(DATA_FICTIVE);

  const addDepense = (__depense) => {
    setDepenses((prevState) => [__depense, ...prevState]);
  };

  return (
    <div className="App">
      <div className="expenses">
        <NouvelleDepense getNewDepense={addDepense} />
        <Depenses data={depenses} />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Depenses from "./components/Depense/Depenses";
import NouvelleDepense from "./components/Nouvelle_depense/NouvelleDepense";

function App() {
  const data = [
    {
      id: 1,
      designationDepense: "Restaurant Emma",
      somme: 350,
      date: new Date(2022, 3, 10),
    },
    {
      id: 2,
      designationDepense: "Nouvelle chaussure Nike",
      somme: 300,
      date: new Date(2021, 10, 12),
    },
    {
      id: 1,
      designationDepense: "Vacances avec Emma",
      somme: 5000,
      date: new Date(2023, 5, 6),
    },
    {
      id: 1,
      designationDepense: "Nouvelle Tv",
      somme: 2500,
      date: new Date(2022, 13, 15),
    },
  ];

  const addDepense = (__depense) => {
    console.log(__depense);
  };

  return (
    <div className="App">
      <div className="expenses">
        <NouvelleDepense getNewDepense={addDepense} />
        <Depenses data={data} />
      </div>
    </div>
  );
}

export default App;

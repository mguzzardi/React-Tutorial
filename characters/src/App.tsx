import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter"

const App: React.FC = () => {
  interface Character {
    id: number;
    name: string;
  }
  let Characters: Character[] = [
    { id: 1, name: "Kyle Broflovski" },
    { id: 2, name: "Eric Cartman" },
    { id: 3, name: "Kenny McCormick" },
    { id: 4, name: "Stan Marsh" },
    { id: 5, name: "Butters Stotch" },
    { id: 6, name: "Randy Marsh" }
  ];

  const handleClick = () => {
    console.log(Counter);
  };

  return (
    <div>
      <h1>Characters List</h1>
      <Counter/>
      <ul>
        {Characters.map((character: Character) => (
          <li key={character.id}>
            {character.name} <button onClick={handleClick}>X</button>
          </li>
        ))}
      </ul>
      <form>
        <input type="text" placeholder="Add Character" />
        <button>Confirm</button>
      </form>
    </div>
  );
};

export default App;

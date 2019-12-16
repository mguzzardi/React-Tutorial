import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Character from "./components/Character";

const App: React.FC = () => {
  interface ICharacter {
    id: number;
    firstName: string;
    lastName: string;
  }

  
  const [Characters, setCharacters] = useState([
    { id: 1, firstName: "Kyle", lastName: "Broflovski" },
    { id: 2, firstName: "Eric", lastName: "Cartman" },
    { id: 3, firstName: "Kenny", lastName: "McCormick" },
    { id: 4, firstName: "Stan", lastName: "Marsh" },
    { id: 5, firstName: "Butters", lastName: "Stotch" },
    { id: 6, firstName: "Randy", lastName: "Marsh" }
  ]);


  const handleDelete = (id:Number) :void => {
    const characters = Characters.slice();
    const index = characters.findIndex((character) => character.id === id);
    characters.splice(index, 1);
    setCharacters(characters);
  };

  return (
    <div>
      <h1>Characters List</h1>
      <Counter/>
      <ul>
      {Characters.map( (character: ICharacter) => (
            <Character id={character.id} firstName={character.firstName} lastName={character.lastName} onDelete={handleDelete} />))}
      </ul>
      <form>
        <input type="text" placeholder="Add Character" />
        <button>Confirm</button>
      </form>
    </div>
  );
};

export default App;

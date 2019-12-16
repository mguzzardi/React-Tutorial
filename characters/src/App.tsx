import React, { useState, SyntheticEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as types from "./common/types";
import Counter from "./components/Counter";
import Character from "./components/Character";
import CharacterForm from "./components/CharacterForm"

const App: React.FC = () => {


  const [ Characters, setCharacters] = useState<types.ICharacter[]>(
    [
      { id: 1, firstName: "Kyle", lastName: "Broflovski" },
      { id: 2, firstName: "Eric", lastName: "Cartman" },
      { id: 3, firstName: "Kenny", lastName: "McCormick" },
      { id: 4, firstName: "Stan", lastName: "Marsh" },
      { id: 5, firstName: "Butters", lastName: "Stotch" },
      { id: 6, firstName: "Randy", lastName: "Marsh" }
    ]
  );

  const handleDelete = (id: Number): void => {
    const characters: types.ICharacter[] = [...Characters];
    const index: number = characters.findIndex(
      character => character.id === id
    );
    characters.splice(index, 1);
    setCharacters(characters);
  };

  const handleDetails = (id: Number): void => {
    const characters: types.ICharacter[] = [...Characters];
    const index: number = characters.findIndex(
      character => character.id === id
    );
    characters.splice(index, 1);
    setCharacters(characters);
  };
const handleAddCharacter = (newCharacter:types.ICharacter) => {
  const updatedCharacters = [...Characters];
  updatedCharacters.push(newCharacter);
  setCharacters(updatedCharacters);
}
  return (
    <>
      <h1>Characters List</h1>
      <Counter />
      <ul>
        {Characters.map((character: types.ICharacter) => (
          <Character
            key={character.id}
            id={character.id}
            firstName={character.firstName}
            lastName={character.lastName}
            onDelete={handleDelete}
            onDetails={handleDetails}
          />
        ))}
      </ul>
      <CharacterForm onCharacterAdd={handleAddCharacter}/>
    </>
  );
};

export default App;

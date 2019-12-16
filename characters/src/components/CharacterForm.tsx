import React, { useState, SyntheticEvent } from "react";

import * as types from "../common/types";

interface CharacterFormProps {
  onCharacterAdd: (newCharacter: types.ICharacter) => void;
}

export const CharacterForm: React.FC<CharacterFormProps> = ({
  onCharacterAdd
}) => {
  const [newCharacter, setNewCharacter] = useState<types.ICharacter>({
    id: 0,
    firstName: "",
    lastName: ""
  });

  const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    let character:types.ICharacter = {id:0, firstName:newCharacter.firstName, lastName:newCharacter.lastName};

    if (target.name === "firstname") {
        character.firstName = target.value;
    }
    if (target.name === "lastname") {
        character.lastName = target.value;
        
    }
    setNewCharacter(character);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const id: number = new Date().getTime();
    onCharacterAdd({
      id: id,
      firstName: newCharacter.firstName,
      lastName: newCharacter.lastName
    });
    setNewCharacter({
        id: 0,
        firstName: "",
        lastName: ""
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstname"
        value={newCharacter.firstName}
        type="text"
        placeholder="firstName"
        onChange={handleChange}
      />{" "}
      <input
        name="lastname"
        value={newCharacter.lastName}
        type="text"
        placeholder="lastName"
        onChange={handleChange}
      />
      <button>Confirm</button>
    </form>
  );
};

export default CharacterForm;

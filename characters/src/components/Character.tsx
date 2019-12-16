import React from "react";

interface CharacterProps {
    id: number,
    firstName: String,
    lastName:String,
    onDelete: (id:Number) => void
}

export const Character: React.FC<CharacterProps> = ({id, firstName, lastName, onDelete}) => {

  return (
    <li key={id}>
    {firstName + " " + lastName} <button onClick={() => onDelete(id)}> X</button>
  </li>
  );
};

export default Character;

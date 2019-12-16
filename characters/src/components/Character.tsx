import React from "react";

interface CharacterProps {
  id: number;
  firstName: String;
  lastName: String;
  onDelete: (id: Number) => void;
  onDetails: (id: Number) => void;
}

export const Character: React.FC<CharacterProps> = ({
  id,
  firstName,
  lastName,
  onDelete,
  onDetails
}) => {
  return (
    <li>
      {firstName + " " + lastName}{" "}
      <button onClick={() => onDelete(id)}> delete </button>
      <button onClick={() => onDetails(id)}> edit </button>
    </li>
  );
};

export default Character;

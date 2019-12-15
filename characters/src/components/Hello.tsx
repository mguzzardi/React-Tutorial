import React from "react";

const Character = ({details, onDelete}) => (
    <li>{details.name} {details.lastname}  <button onClick={() => onDelete(details.id)}>X</button></li>
)
export default Character;
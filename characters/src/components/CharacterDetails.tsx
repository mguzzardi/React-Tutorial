import React from "react";

enum Sex {undefined, female, male};

interface CharacterDetailsProps {
    id: number;
    firstName: String;
    lastName: String;
    description: String;
    sex:Sex;
  }

  export const CharacterDetails: React.FC<CharacterDetailsProps> = ({
    id,
    firstName,
    lastName,
    description,
    sex
  }) => {
    return (
      <form>
        <label>firstName</label><input type="text" placeholder="firstName">{firstName}</input>
        <label>lastName</label><input type="text" placeholder="lastName">{lastName}</input>
        <label>description</label><textarea placeholder="description">{description}</textarea>
        <label>sex</label><select>
            <option>{Sex[Sex.undefined]}</option>
            <option>{Sex[Sex.female]}</option>
            <option>{Sex[Sex.male]}</option>

            </select>
      </form>

    );
  };
  
  export default CharacterDetails;
  
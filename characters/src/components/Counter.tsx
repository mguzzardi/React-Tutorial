import React, { useState } from "react";


export const Counter: React.FC = () => {
  const  [counterValue, setCounter] = useState(0);
  const handleChange = () => setCounter(counterValue + 1);
  return (
    <div>
      {counterValue}<button onClick={handleChange}>+1</button>
    </div>
  );
};

export default Counter;

import React, { useState } from "react";

export const Counter: React.FC = () => {

  const [counterValue, setCounter] = useState<number>(0);
  const handleIncrement = () => setCounter(counterValue + 1);

  const handleDecrement = () => {
    let newValue: number = counterValue - 1;
    newValue = newValue >= 0 ? newValue : 0;
    setCounter(newValue);
  };
  return (
    <>
      {counterValue}
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
    </>
  );
};

export default Counter;

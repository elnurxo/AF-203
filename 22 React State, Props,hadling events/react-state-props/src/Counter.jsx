import { useState } from "react";

const Counter = () => {
  //hook
  let [count, setCount] = useState(0);
  function handleIncrease() {
    setCount(++count);
  }
  function handleDecrease() {
    if (count >= 1) {
      setCount(--count);
    }
  }
  function handleReset() {
    setCount(0);
  }
  return (
    <>
      <button onClick={handleDecrease}>Decrease -</button>
      <span>{count}</span>
      <button onClick={handleIncrease}>Increase +</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Counter;

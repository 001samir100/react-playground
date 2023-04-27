import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount(0);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  // This is example of functional update
  const handleComplexIncrease = () => {
    setTimeout(() => {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }, 2000);
  };

  // This is example of functional update
  const handleComplexDecrease = () => {
    setTimeout(() => {
      setCount((prevCount) => {
        return prevCount - 1;
      });
    }, 2000);
  };

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={handleIncrease}>Increase</button>
      <h3>Count: {count}</h3>
      <button onClick={handleDecrease}>Decrease</button>
      <hr />
      <button onClick={handleReset}>Reset</button>
      <hr />
      <h1>Complex counter</h1>
      <button onClick={handleComplexIncrease}>Increase</button>
      <h3>Count: {count}</h3>
      <button onClick={handleComplexDecrease}>Decrease</button>
    </div>
  );
};

export default Counter;

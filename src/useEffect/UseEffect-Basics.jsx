import React, { useEffect, useState } from "react";
// By default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    // conditional can be applied inside of the hook but not outside of the hook
    if (value >= 1) {
      document.title = `New message (${value})`;
    }
  }, [value]);
  console.log("render component");
  return (
    <div>
      <h1>useEffect value: {value}</h1>
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </div>
  );
};

export default UseEffectBasics;

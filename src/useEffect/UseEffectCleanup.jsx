import React, { useEffect, useState } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  // checkSize, here it is callback function.
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("Clean up");
      // unsubscribe or remove any event listeners that is used inside useEffect.
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  console.log("render");
  return (
    <div>
      <h2>Use effect clean up</h2>
      <hr />
      <h1>Window</h1> <h2>{size}px</h2>
    </div>
  );
};

export default UseEffectCleanup;

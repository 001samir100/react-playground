import React, { useEffect, useRef } from "react";

// preserves value
// Does not trigger re-render
// triger DOM nodes/elements
const UseRefDemo = () => {
  const refContainer = useRef(null);
  const refDiv = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit clicked");
    console.log(refContainer.current.value);
    console.log(refDiv.current);
  };

  useEffect(() => {
    console.log(refContainer);
    refContainer.current.focus();
    console.log(refDiv);
  });

  return (
    <div>
      <h1>React useRef</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={refContainer} />
        <button type="submit">submit</button>
      </form>
      <div ref={refDiv}>Div is ready. This is refDiv</div>
    </div>
  );
};

export default UseRefDemo;

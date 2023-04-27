import React, { useCallback, useState } from "react";
import Todos from "./Todos";

//useCallback returns a memoized function. line number:17

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  //   const addTodo = useCallback(() => {
  //     setTodos((t) => [...t, "New Todo"]);
  //   }, [todos]);

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "new todo"]);
  }, []);

  return (
    <div>
      <h1>useCallback Hook</h1>
      <Todos todos={todos} addTodo={addTodo}></Todos>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default UseCallbackDemo;

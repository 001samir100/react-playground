import React, { useReducer, useRef, useState } from "react";

const UseReducerToDo = () => {
  const initialState = { todos: [] };
  const inputRef = useRef(null);

  const [todo, setTodo] = useState({
    id: "",
    task: "",
  });

  const todoReducer = (state, action) => {
    switch (action.type) {
      case "save": {
        inputRef.current.focus();

        setTodo((prev) => ({ ...prev, id: "", task: "" }));

        // console.log(`payload: ${JSON.stringify(action.payload)}`);
        return {
          todos: [...state.todos, action.payload],
        };
      }
      case "edit": {
        return {
          todos: state.todos.map((data) => {
            if (data.id === action.payload.id) {
              setTodo({ id: data.id, task: data.task });
            }
            return data;
          }),
        };
      }
      case "delete": {
        return {
          todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        };
      }
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSave = (e) => {
    // todo: why todo state is not updating intantly?
    setTodo((prev) => ({ ...prev, id: new Date().getTime().toString() }));
    console.log(`handle save: ${todo.id}`);
    dispatch({ type: "save", payload: todo });
  };
  const handleEdit = (id) => {
    dispatch({ type: "edit", payload: { id } });
  };
  const handleDelete = (id) => {
    dispatch({ type: "delete", payload: { id } });
  };

  return (
    <div>
      <h2>Todo list</h2>
      <input
        ref={inputRef}
        value={todo.task}
        onChange={(e) =>
          setTodo((prev) => ({
            ...prev,
            id: new Date().getTime().toString(),
            task: e.target.value,
          }))
        }
      />
      <button onClick={handleSave}>Save</button>
      <hr />
      <ul>
        {state.todos.map((todo) => {
          return (
            <li key={todo.id}>
              id: {todo.id} &nbsp; task: {todo.task} &nbsp;
              <button onClick={() => handleEdit(todo.id)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseReducerToDo;

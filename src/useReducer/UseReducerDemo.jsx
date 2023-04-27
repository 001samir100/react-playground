import React, { useReducer } from "react";

const UseReducerDemo = () => {
	const initialState = { count: 0 };

	const reducer = (state, action) => {
		// 🚩 Don't mutate an object in state like this:
		// ✅ Instead, return a new object
		switch (action.type) {
			case "increment": {
				return { count: state.count + 1 };
			}
			case "decrement": {
				return { count: state.count - 1 };
			}
			default: {
				throw new Error();
			}
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const handleIncrement = () => {
		dispatch({ type: "increment" });
	};

	const handleDecrement = () => {
		dispatch({ type: "decrement" });
	};

	return (
		<div>
			<h2>useReducer Demo</h2>
			<div>Count: {state.count}</div>
			<button onClick={handleIncrement}>+</button>
			<button onClick={handleDecrement}>-</button>
		</div>
	);
};

export default UseReducerDemo;

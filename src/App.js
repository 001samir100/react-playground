import logo from "./logo.svg";
import "./App.css";
import Counter from "./counter/Counter";
import UseEffectBasics from "./useEffect/UseEffect-Basics";
import UseEffectCleanup from "./useEffect/UseEffectCleanup";
import UseEffectSecondArg from "./useEffect/UseEffectSecondArg";
import MultipleReturn from "./useEffect/MultipleReturn";
import FormDemo from "./forms/FormDemo";
import AddUser from "./forms/AddUser";
import DynamicInput from "./forms/DynamicInput";
import MyForm from "./forms/DynamicFormInput";
import UseRefDemo from "./useRef/UseRefDemo";
import UseReducerDemo from "./useReducer/UseReducerDemo";
import UseReducerToDo from "./useReducer/UseReducerToDo";
import UseCallbackDemo from "./useCallback/UseCallbackDemo";
import UseMemoDemo from "./useCallback/UseMemoDemo";
import UseContextDemo from "./useContext/UseContextDemo";
import ErrorDemo from "./errors/ErrorDemo";

import { ErrorBoundary } from "react-error-boundary";
import ReactErrorBoundary from "./errors/ErrorBoundary";
import { useEffect, useRef, useState } from "react";
import CheckInternetConnection from "./checkConnection/CheckInternetConnection";
import FetchPhoto from "./fetchApi/FetchPhoto";

function Greeting({ subject }) {
	return <div>Hello {subject.toUpperCase()}</div>;
}

function Farewell({ subject }) {
	return <div>Goodbye {subject.toUpperCase()}</div>;
}

function App() {
	return (
		<>
			<FetchPhoto></FetchPhoto>
		</>
	);
}
const OurFallbackComponent = ({
	error,
	componentStack,
	resetErrorBoundary,
}) => {
	return (
		<div>
			<h1 style={{ color: "red" }}>An error occurred: {error.message}</h1>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
};
export default App;

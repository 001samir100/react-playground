import axios from "axios";
import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorDemo = () => {
  function ErrorFallback({ error }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    );
  }

  function Greeting({ subject }) {
    if (subject !== null) {
      return <div>Hello {subject.toUpperCase()}</div>;
    } else {
      return <div>Hello</div>;
    }
  }

  function Farewell({ subject }) {
    if (subject !== null) {
      return <div>Goodbye {subject.toUpperCase()}</div>; // .toUpperCase() is causing runtime error
    } else {
      return <div>Goodbye</div>;
    }
  }

  return (
    <div>
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
      <h1>React error demo</h1>
      <Greeting /> {/* </ErrorBoundary>{" "} */}
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
      <Farewell />
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default ErrorDemo;

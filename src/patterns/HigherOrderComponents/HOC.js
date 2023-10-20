/*

In the context of React, a Higher-Order Component (HOC) is a function that takes a component and returns a new
 component. The purpose of an HOC is to provide a way to reuse component logic. It does this by adding additional 
 features or functionalities to the original component. HOCs are a common pattern in React for sharing behavior
  between components without having to repeat code. */

import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login state

    // Simulated authentication logic
    const authenticate = () => {
      setIsLoggedIn(true);
    };

    // If the user is not logged in, redirect to the login page
    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }

    // If the user is logged in, render the wrapped component
    return <WrappedComponent authenticate={authenticate} {...props} />;
  };

  return WithAuth;
};

// Example protected component
const ProtectedComponent = (props) => {
  return (
    <div>
      <h2>Protected Component</h2>
      <button onClick={props.authenticate}>Log In</button>
    </div>
  );
};

// Applying the authentication HOC to the protected component
const ComponentWithAuth = withAuth(ProtectedComponent);

// Example usage in App
const App = () => {
  return (
    <div>
      <h1>Authentication Higher-Order Component Example</h1>
      <ComponentWithAuth />
    </div>
  );
};

export default App;

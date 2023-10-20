import React, { useState } from "react";

// you should use an anonymous arrow function that takes an argument that is the prev State

const UseStateComponent = () => {
  const [counter, setCounter] = useState(0);

  const [objectData, setObjectData] = useState({ nume: "", prenume: "" });

  const increment = () => {
    // update state using anonymous function
    // setCounter((prev) => prev + 1);
    // setCounter((prev) => prev + 1);
    // updates the state using the current value of counter
    // setCounter(counter + 1);
    // setCounter(counter + 1);
  };

  const decrement = () => {
    // update state using anonymous function
    // setCounter((prev) => prev - 1);
    // setCounter((prev) => prev - 1);

    // updates the state using the current value of counter
    setCounter(counter - 1);
    setCounter(counter - 1);
  };

  const incrementCounterAsync = () => {
    setTimeout(() => {
      // update state using anonymous function
      setCounter((prev) => prev + 1);

      // updates the state using the current value of counter
      // setCounter(counter + 1);
    }, 1000); // Simulating an asynchronous operation
  };

  const changeObjectData = () => {
    // update state using anonymous function
    // setObjectData((prev) => ({ ...prev, nume: "Cimpan" }));
    // setObjectData((prev) => ({ ...prev, prenume: "Marko" }));

    // updates the state using the current value of objetData
    setObjectData({ ...objectData, nume: "Cimpan" });
    setObjectData({ ...objectData, prenume: "Marko" });
  };

  console.log("The objectData:", objectData);
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Counter: {counter}</h1>
      <div>
        <button
          style={{
            borderRadius: "5px",
            padding: "15px",
            marginRight: "10px",
            cursor: "pointer",
          }}
          onClick={increment}
        >
          increment
        </button>
        <button
          style={{
            borderRadius: "5px",
            padding: "15px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
          onClick={decrement}
        >
          decrement
        </button>
      </div>

      <button
        style={{
          borderRadius: "5px",
          padding: "15px",
          marginRight: "10px",
          cursor: "pointer",
          marginTop: "30px",
        }}
        onClick={incrementCounterAsync}
      >
        increment Counter Async
      </button>

      <button
        style={{
          borderRadius: "5px",
          padding: "15px",
          marginRight: "10px",
          cursor: "pointer",
          marginTop: "30px",
        }}
        onClick={changeObjectData}
      >
        change object data
      </button>
    </div>
  );
};

export default UseStateComponent;

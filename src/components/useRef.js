/*
useRef hook in React is used to create a mutable reference that persists across renders.
 It can be used to access or store a reference to a DOM element or to hold any mutable value that does
  not trigger a re-render when it's changed. */

/* 
  Creating a Ref: You can create a ref by calling the useRef hook and passing an initial value as an argument. 
  For example, const myRef = useRef(initialValue);. 
  The myRef object will contain a .current property that holds the current value of the ref.



Accessing DOM Elements: You can use a ref to directly access and interact with a DOM element. 
For instance, you can set focus on an input element, measure its size, or manipulate its properties.

Preserving Values: The value of a ref persists across re-renders of a component. Updating the value 
of a ref using myRef.current = newValue will not trigger a re-render of the component.

Usage in Functional Components: The useRef hook is primarily used in functional components.
 Unlike the ref attribute in class components, which is an object that represents a mounted component, 
 the useRef hook allows you to create mutable variables that persist for the entire lifecycle of the component.

Use Cases: Common use cases for the useRef hook include managing focus, integrating with 
third-party DOM libraries, triggering imperative animations, and storing any mutable value that you want to
 persist without causing a re-render.*/
import React, { useState, useRef, useEffect } from "react";

const UseRef = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const buttonRef = useRef();

  const count2Ref = useRef();
  count2Ref.current = count2;

  useEffect(() => {
    console.log(count1 * count2Ref.current);
    // console.log(count1 * count2);

    if (count1 === 2) buttonRef.current.click();
  }, [count1]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    // Add your form submission logic here
  };

  return (
    <div>
      <button onClick={() => setCount1((prev) => prev + 1)}>
        Count1: {count1}
      </button>

      <button onClick={() => setCount2((prev) => prev + 1)}>
        Count2: {count2}
      </button>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          marginTop: "30px",
        }}
        onSubmit={handleSubmit}
      >
        <input></input>
        <input></input>
        <button type="submit" ref={buttonRef}>
          submit
        </button>
      </form>
    </div>
  );
};

export default UseRef;

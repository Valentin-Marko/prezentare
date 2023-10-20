/*
A React component should always have pure rendering logic. This means that it must return the same output if its
 props, state, and context haven’t changed. By using PureComponent, you are telling React that your component 
 complies with this requirement, so React doesn’t need to re-render as long as its props and state haven’t changed.
  However, your component will still re-render if a context that it’s using changes.

In this example, notice that the Greeting component re-renders whenever name is 
changed (because that’s one of its props), but not when address is changed 
(because it’s not passed to Greeting as a prop): */

import React, { useState } from "react";

// Example of a memoized functional component using React.memo
const Greeting = React.memo(({ name }) => {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return (
    <h3>
      Hello{name && ", "}
      {name}!
    </h3>
  );
});

const PureComp = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
    <>
      <label>
        Name{": "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address{": "}
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
};

export default PureComp;

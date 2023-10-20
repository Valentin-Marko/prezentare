/* The useCallback hook in React is used to optimize the performance of child 
components that rely on reference equality to prevent unnecessary re-rendering. 
It's particularly useful when passing callbacks to optimized child components that 
rely on reference equality to prevent unnecessary re-renders.

When a functional component is re-rendered, any functions defined within that component are recreated,
 which can lead to unnecessary re-renders in child components that rely on those functions.
  useCallback memoizes the provided function instance, 
  so it's only re-created if one of the dependencies has changed.*/

import React, { useState, useCallback } from "react";

import List from "../helpers/List";

const UseCallback = () => {
  const [name, setName] = useState("");

  const [showFastSentence, setShowFastSentence] = useState(false);

  const getNames = useCallback(
    (a) => {
      return [name, name + a[0], name + a[1]];
    },
    [name]
  );

  // const getNames = () => [name, name + " Valentin", name + " Marko"];

  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <div style={{ display: "flex", marginBottom: "30px" }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "10px" }}
        />
      </div>

      <List getNames={getNames} />

      <div style={{ display: "flex", marginBottom: "30px" }}>
        <button
          onClick={() => {
            setShowFastSentence((prev) => !prev);
          }}
          style={{ marginRight: "10px" }}
        >
          Button to update parent state
        </button>

        {showFastSentence && (
          <h3 style={{ margin: "0px" }}>Does the child updates?</h3>
        )}
      </div>
    </div>
  );
};

export default UseCallback;

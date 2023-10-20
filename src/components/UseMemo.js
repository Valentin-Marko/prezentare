// What is useMemo?
// useMemo is a hook in React that is used for memoization.
// It allows you to optimize and cache the result of a function or
// computation that is expensive in terms of performance. By using useMemo,
// you can control when to recompute a value based on one or more dependencies.

import React, { useState, useMemo } from "react";

const slowFunction = (sentence) => {
  for (let i = 0; i < 499999999; i++) {}

  return "Slow sentence:" + sentence;
};

const UseMemo = () => {
  const [name, setName] = useState("");

  const [showFastSentence, setShowFastSentence] = useState(false);

  // const sentence = slowFunction(name);

  const sentence = useMemo(() => {
    return slowFunction(name);
  }, [name]);
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
        <h3 style={{ margin: "0px" }}>{sentence}</h3>
      </div>

      <div style={{ display: "flex", marginBottom: "30px" }}>
        <button
          onClick={() => {
            setShowFastSentence((prev) => !prev);
          }}
          style={{ marginRight: "10px" }}
        >
          Show fast sentence
        </button>

        {showFastSentence && <h3 style={{ margin: "0px" }}>Fast sentence</h3>}
      </div>
    </div>
  );
};

export default UseMemo;

import React, { useState, useLayoutEffect, useEffect } from "react";

const UseLayoutEffect = () => {
  const [width, setWidth] = useState(window.innerWidth);

  console.log("THE WIDTH IS:", width);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("USE EFFECT FUNCTION TRIGGERED");
  }, []);

  useLayoutEffect(() => {
    console.log("USE LAYOUT EFFECT FUNCTION TRIGGERED");
  });

  useLayoutEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div>
      <h2>Window Width: {width}</h2>
    </div>
  );
};
export default UseLayoutEffect;

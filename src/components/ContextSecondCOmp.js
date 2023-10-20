import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ContextSecondComp = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#f2f2f2" : "#333",
      }}
    >
      <h2>Second Context Component</h2>
      <p>This is the second component.</p>
    </div>
  );
};

export default ContextSecondComp;

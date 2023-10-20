// Header.js
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ContextFirstComp = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#f2f2f2" : "#333",
        padding: "20px",
      }}
    >
      <h2>First ContextComponent</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ContextFirstComp;

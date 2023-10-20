import React from "react";

// A simple Button component
const Button = ({ handleButtonClick, label }) => {
  console.log("THE BUTTON CLICK IN CARD,", handleButtonClick);

  return <button onClick={handleButtonClick}>{label}</button>;
};

const Card = ({ title, content, handleButtonClick }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <h3>{title}</h3>
      <p>{content}</p>
      <Button label="Click Me" handleButtonClick={handleButtonClick} />
    </div>
  );
};

const ComponentComposition = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h2>Component Composition Example</h2>
      <Card
        title="Welcome"
        content="This is a simple example of component composition in React"
        handleButtonClick={handleClick}
      />
    </div>
  );
};

export default ComponentComposition;

import React, { useEffect, useState } from "react";

const List = ({ getNames }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getNames([" Valentin", " Marko"]));
    console.log("UPDATING ITEMS IN CHILD");
  }, [getNames]);

  return (
    <>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
};

export default List;

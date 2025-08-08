import React, { useState } from "react";
import ListView from "./ListView.tsx"; // import the new component
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([]);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  const addNumber = () => {
    if (count > 0 && !numbers.includes(count)) {
      setNumbers(prev => [...prev, count]);
      setCount(0);
    }
  };

  const sortList = (order: "asc" | "desc") => {
    const sorted = [...numbers].sort((a, b) =>
      order === "asc" ? a - b : b - a
    );
    setNumbers(sorted);
  };

  return (
    <div className="container">
      <h1>RAIQA Counter App</h1>

      <div className="counter">
        <button onClick={decrement}>-</button>
        <span className="count">{count}</span>
        <button onClick={increment}>+</button>
      </div>

      <button onClick={addNumber} className="add-btn">Add Number</button>

      <ListView numbers={numbers} onSort={sortList} />
    </div>
  );
};

export default Counter;

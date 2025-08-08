import React from "react";
import "./ListView.css";

function ListView({ numbers, onSort })  {
  // Determine highest & lowest numbers
  const highest = numbers.length ? Math.max(...numbers) : null;
  const lowest = numbers.length ? Math.min(...numbers) : null;

  return (
    <div className="list-view">
      <div className="sort-buttons">
        <button onClick={() => onSort("asc")} className="asc-btn">Sort Asc</button>
        <button onClick={() => onSort("desc")} className="desc-btn">Sort Desc</button>
      </div>

      <ul className="number-list">
        {numbers.length === 0 ? (
          <li className="empty-msg">No numbers added yet</li>
        ) : (
          numbers.map((num, index) => (
            <li
              key={index}
              className={
                num === highest
                  ? "highlight-highest"
                  : num === lowest
                  ? "highlight-lowest"
                  : ""
              }
            >
              {num}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ListView;

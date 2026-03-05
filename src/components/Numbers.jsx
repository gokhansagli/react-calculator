import React from "react";

function Numbers({ calculator, buttons }) {
  return (
    <div className="numbers">
      {buttons.map((item, index) => (
        <div className="item" key={index}>
          <button onClick={() => calculator(item)}>
            {String(item).toUpperCase()}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Numbers;

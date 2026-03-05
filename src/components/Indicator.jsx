import React from "react";

function Indicator({ total }) {
  return (
    <div>
      <div className="top">
        <h3 className="calc-title">Calculator</h3>
        <input type="text" value={total} />
      </div>
    </div>
  );
}

export default Indicator;

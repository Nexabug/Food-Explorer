import React from "react";

function Country({ cityListState }) {
  return (
    <div className="city-item">
      <p>{cityListState.country}</p>
      <p>{cityListState.time}</p>
    </div>
  );
}

export default Country;

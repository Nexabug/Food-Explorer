import React from "react";

function Country({ city }) {
  return (
    <div className="city-item">
      <p>{city.country}</p>
      <p>{city.emoji}</p>
    </div>
  );
}

export default Country;

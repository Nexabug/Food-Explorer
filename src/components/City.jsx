import React from "react";

function City({ city }) {
  return (
    <div className="city-item">
      <div className="city-info">
        <p className="cityname">{city.city}</p>
        <p className="countryname">{city.country}</p>
        <p className="flag">{city.emoji}</p>
      </div>

      <div>
        <p>{city.position.at(0)}</p>
        <p> {city.position.at(1)}</p>
      </div>
    </div>
  );
}

export default City;

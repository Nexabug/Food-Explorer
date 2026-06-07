import React from "react";
import { Link } from "react-router-dom";

function City({ cities }) {
  const { id, city, country, emoji, position } = cities;
      
  return (
    <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
      <div className="city-item">
        <div className="city-info">
          <p className="cityname">{city}</p>
          <p className="countryname">{country}</p>
          <p className="flag">{emoji}</p>
        </div>

        <div>
          <p>{position.lat}</p>
          <p>{position.lng}</p>
        </div>
      </div>
    </Link>
  );
}

export default City;

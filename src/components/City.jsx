import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";
function City({ cityListState }) {
  const { name, city, country, time, id, position } = cityListState;

  const { dispatchCity } = useContext(Context);
  function handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    dispatchCity({ type: "deletecity", payload: id });
  }
  return (
    <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
      <div className="city-item">
        <div className="city-info">
          <p className="cityname">{city}</p>
          <p className="countryname">{country}</p>
          <p className="flag">{time}</p>
        </div>

        <div>
          <p>{position.lat}</p>
          <p>{position.lng}</p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="delete"
          onClick={handleDelete}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </Link>
  );
}

export default City;

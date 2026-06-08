
import React, { useContext } from "react";
import { Context } from "../App";

function Country({ cityListState }) {
  const { dispatchCity } = useContext(Context);

  const { id } = cityListState;
  function handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    dispatchCity({ type: "deletecity", payload: id });
  }
  return (
    <div className="city-item">
      <p>{cityListState.country}</p>
      <p>{cityListState.time}</p>
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
  );
}

export default Country;

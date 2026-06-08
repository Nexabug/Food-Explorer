import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Context } from "../App";
function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cityListState } = useContext(Context);

  const state = cityListState.find((item) => String(item.id) === String(id));

  return (
    <div className="toggle-data-div detail">
      <p>
        <strong>Name:</strong> {state.name}
      </p>
      <p>
        <strong>Date:</strong> {state.date}
      </p>
      <p>
        <strong>Time:</strong> {state.time}
      </p>
      <p>
        <strong>Country:</strong> {state.country}
      </p>
      <p>
        <strong>City:</strong> {state.city}
      </p>
      <p>
        <strong>Notes:</strong> {state.notes}
      </p>
      <a href={`https://en.wikipedia.org/wiki/${state.city}`} target="blank">
        Wikipedia---(:
      </a>
      <button className="btn" onClick={() => navigate(-1)}>
        back btn
      </button>
    </div>
  );
}

export default Detail;

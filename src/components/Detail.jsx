import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [posPrams, setPosPrams] = useSearchParams();
  const navigate = useNavigate();

  const lat = Number(posPrams.get("lat"));
  const lng = Number(posPrams.get("lng"));
  return (
    <>
      <div>Detail of: {id}</div>
      <div>lat: {lat}</div>
      <div>lng: {lng}</div>

      <button onClick={() => setPosPrams({ lat: 50, lng: 14 })}>
        change position
      </button>
      <button onClick={() => navigate(-1)}>back btn</button>
    </>
  );
}

export default Detail;

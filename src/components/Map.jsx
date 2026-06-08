import React, { useEffect, useState, useContext } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
  CircleMarker,
} from "react-leaflet";

import { useNavigate, useSearchParams } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { Context } from "../App";

export default function Map() {
  const navigate = useNavigate();
  const { dispatch } = useContext(Context);

  const [position, setpos] = useState({ lat: 24, lng: 84 });

  const API_KEY = "932665331cfd434a8514cd1c2fd1cf5a";

  function handleClick(newPos) {
    const API_URL = `https://api.geoapify.com/v1/geocode/reverse?lat=${newPos.lat}&lon=${newPos.lng}&apiKey=${API_KEY}`;

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "city", payload: data.features[0].properties.city });
        dispatch({
          type: "country",
          payload: data.features[0].properties.country,
        });
      })
      .catch((err) => console.error("Error fetching location data:", err));

    navigate(`form?lat=${newPos.lat}&lng=${newPos.lng}`);
    dispatch({ type: "position", payload: newPos });
  }

  return (
    <div className="map">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        keyboard={true}
      >
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <HandleClickMap setpos={setpos} handleClick={handleClick} />

        <CircleMarker center={position} radius={20} color="red" />
        <CustomMarker position={position} />
        <ChangeCenter />
      </MapContainer>
    </div>
  );
}

function HandleClickMap({ setpos, handleClick }) {
  const map = useMapEvents({
    click(e) {
      // e.stopPropagation();
      setpos(e.latlng);
      map.flyTo(e.latlng, 11);

      handleClick(e.latlng);
    },
  });

  return null;
}

function CustomMarker({ position }) {
  const map = useMap();
  const { state } = useContext(Context);

  return (
    <Marker
      position={position}
      eventHandlers={{
        click: () => {
          map.flyTo(position);
        },
      }}
    >
      <Popup>{state?.notes || "No notes available"}</Popup>
    </Marker>
  );
}

function ChangeCenter() {
  const [qString] = useSearchParams();
  const lat = qString.get("lat");
  const lng = qString.get("lng");
  const map = useMap();
  const { cityListState } = useContext(Context);

  useEffect(() => {
    if (!lat || !lng) return;
    map.flyTo([+lat, +lng], 11);
  }, [lat, lng, map]);

  if (!lat || !lng || !cityListState || !cityListState.length) return null;

  const state = cityListState.find(
    (item) =>
      String(item.position.lat) === String(lat) &&
      String(item.position.lng) === String(lng),
  );

  return (
    <>
      <Marker position={[+lat, +lng]}>
        <Popup>{state?.notes || "No notes"}</Popup>
      </Marker>
      <CircleMarker center={[+lat, +lng]} radius={20} color="red" />
    </>
  );
}

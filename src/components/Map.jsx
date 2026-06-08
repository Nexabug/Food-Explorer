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

import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { Context } from "../App";

export default function Map() {
  const navigate = useNavigate();
  const { dispatch } = useContext(Context);
  const [cur, setcur] = useState(0);
  const images = [
    "/USER.jpeg",
    "/user02.jpeg",
    "/user03.jpeg",
    "/user04.jpeg",
    "/user05.jpeg",
    "/user06.jpeg",
    "/user07.jpeg",
    "/user08.jpeg",
    "/user09.jpeg",
    "/user10.jpeg",
    "/user11.jpeg",
    "/user12.jpeg",
    "/user13.jpeg",
    "/user14.jpeg",
  ];
  const [position, setpos] = useState({ lat: 24, lng: 84 });

  const API_KEY = "932665331cfd434a8514cd1c2fd1cf5a";

  useEffect(() => {
    const interval = setInterval(() => {
      setcur((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [cur]);
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

  function handlLogout() {
    dispatch({ type: "reset" });
  }

  function handleGeo() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;

          handleClick({ lat: lat, lng: lng });
          setpos({ lat, lng });
        },
        (err) => {
          console.log(err.message);
        },
      );
    } else {
      return;
    }
  }
  return (
    <div className="map">
      <div className="user">
        <img src={images[cur]} alt="user photo" className="user-pfp" />
        <Link to="/login" onClick={handlLogout} className="logout-btn">
          LogOut
        </Link>
      </div>
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

      <div className="geoloc">
        <button className="geo-btn btn" onClick={handleGeo}>
          Use My Current Loctaion
        </button>
      </div>
    </div>
  );
}

function HandleClickMap({ setpos, handleClick }) {
  const map = useMapEvents({
    click(e) {
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

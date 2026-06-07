import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMapEvents } from "react-leaflet";
import { CircleMarker } from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Map() {
  const navigate = useNavigate();
  const [marker, setmarker] = useState([]);
  const [position, setpos] = useState([50, 14]);

  return (
    <div className="map" onClick={() => navigate("form")}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        keyboard={true}
      >
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <HandleClickMap setpos={setpos} setmarker={setmarker} />
        <CircleMarker center={position} radius={20} color="red" />
        {marker.map((x) => (
          <CustomMarker x={x} key={x[0]} />
        ))}
      </MapContainer>
    </div>
  );
}

function HandleClickMap({ setpos, setmarker }) {
  const map = useMapEvents({
    click(e) {
      setpos(e.latlng);
      map.flyTo(e.latlng, 11);
      setmarker((prev) => [...prev, e.latlng]);
    },
  });

  return null;
}

function CustomMarker({ x }) {
  const map = useMap();
  return (
    <Marker
      position={x}
      eventHandlers={{
        click: () => {
          map.flyTo(x, 11);
        },
      }}
    >
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}

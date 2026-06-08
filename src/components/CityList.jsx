import React, { useContext } from "react";
import Loader from "../ui/Loader";
import City from "./City";
import { Link } from "react-router-dom";
import NoDataYet from "./NoDataYet";
import { Context } from "../App";

function CityList() {
  const { cityListState, dispatchCity } = useContext(Context);
  function handleDelete() {
    dispatchCity({ type: "removeAll" });
  }

  if (cityListState.length === 0) return <NoDataYet />;

  return (
    <div className="toggle-data-div">
      {cityListState.map((city) => (
        <City cityListState={city} key={city.id} />
      ))}
      <button onClick={handleDelete} className="remove">
        Remove All
      </button>
    </div>
  );
}

export default CityList;

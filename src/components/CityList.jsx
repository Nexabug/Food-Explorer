import React, { useContext } from "react";
import Loader from "../ui/Loader";
import City from "./City";
import { Link } from "react-router-dom";
import NoDataYet from "./NoDataYet";
import { Context } from "../App";

function CityList() {
  const { cityListState } = useContext(Context);
  if (cityListState.length === 0) return <NoDataYet />;

  return (
    <div className="toggle-data-div">
      {cityListState.map((city) => (
        <City cityListState={city} key={city.id} />
      ))}
    </div>
  );
}

export default CityList;

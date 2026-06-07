import React from "react";
import Loader from "../ui/Loader";
import City from "./City";
import { Link } from "react-router-dom";
import NoDataYet from "./NoDataYet";
function CityList({ cities, isloading }) {
  if (cities.length === 0) return <NoDataYet />;

  return (
    <div className="toggle-data-div">
      {isloading ? <Loader /> : cities.map((city) => <City cities={city} />)}
    </div>
  );
}

export default CityList;

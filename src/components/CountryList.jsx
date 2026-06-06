import React from "react";
import Country from "./Country";
import Loader from "../ui/Loader";

function CountryList({ cities, isloading }) {
  return (
    <div className="toggle-data-div">
      {isloading ? (
        <Loader />
      ) : (
        cities.map((city) => <Country city={city} key={city.id} />)
      )}
    </div>
  );
}

export default CountryList;

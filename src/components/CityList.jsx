import React from "react";
import Loader from "../ui/Loader";
import City from "./City"
function CityList({ cities, isloading }) {
  return (
    <div className="toggle-data-div">
      {isloading ? (
        <Loader />
      ) : (
        cities.map((city) => <City city={city} key={city.id} />)
      )}
    </div>
  );
}

export default CityList;

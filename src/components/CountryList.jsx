import Country from "./Country";
import Loader from "../ui/Loader";
import NoDataYet from "./NoDataYet";
import { Context } from "../App";
import { useContext } from "react";

function CountryList() {
  const { cityListState, dispatchCity } = useContext(Context);
  function handleDelete() {
    dispatchCity({ type: "removeAll" });
  }

  if (cityListState.length === 0) return <NoDataYet />;
  return (
    <div className="toggle-data-div">
      {cityListState.map((city) => (
        <Country cityListState={city} key={city.id} />
      ))}
      <button onClick={handleDelete} className="remove">Remove All</button>
    </div>
  );
}

export default CountryList;

import React, { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Context } from "../App";
function Form() {
  const navigate = useNavigate();
  const [queryParams, setQueryParams] = useSearchParams();
  const { state, dispatch, cityListState, dispatchCity } = useContext(Context);
  // console.log(state, dispatch, cityListState, dispatchCity);

  function handleName(e) {
    dispatch({ type: "name", payload: e.target.value });
  }
  function handleDate(e) {
    dispatch({ type: "date", payload: e.target.value });
  }
  function handleTime(e) {
    dispatch({ type: "time", payload: e.target.value });
  }
  function handleNotes(e) {
    dispatch({ type: "notes", payload: e.target.value });
  }

  function handleAdd() {
    const lat = queryParams.get("lat");
    const lng = queryParams.get("lng");
    dispatchCity({ type: "addCity", payload: state });
    navigate("/app/cities");
    dispatch({ type: "reset" });
  }
  function handleBack() {
    navigate(-1);
    dispatch({ type: "reset" });
  }
  return (
    <div className="form">
      <form onSubmit={(e) => e.preventDefault()}>
        <p>name</p>
        <input type="text" onChange={handleName} value={state.name} />
        <p>date</p>
        <input type="date" onChange={handleDate} value={state.date} />
        <p>time</p>
        <input type="time" onChange={handleTime} value={state.time} />
        <p>notes</p>
        <input type="text" onChange={handleNotes} value={state.notes} />
        <div className="form-btn">
          <button onClick={handleAdd} className="btn">
            Add btn
          </button>
          <button onClick={handleBack} className="btn sec-btn">
            Back btn
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

import React from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  return (
    <div className="form" onSubmit={(e) => e.preventDefault()}>
      <form>
        <p>name</p>
        <input type="text" />
        <p>date</p>
        <input type="date" />
        <p>time</p>
        <input type="time" />
        <p>notes</p>
        <input type="text" />
        <div className="form-btn">
          <button onClick={() => navigate("/app/cities")} className="btn">
            Add btn
          </button>
          <button onClick={() => navigate(-1)} className="btn sec-btn">
            Back btn
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

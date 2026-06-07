import React from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>back btn</button>
    </div>
  );
}

export default Form;

import React from "react";
import { useState } from "react";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const handelInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handelInputChange} />
      {inputValue}
    </div>
  );
}

export default Input;

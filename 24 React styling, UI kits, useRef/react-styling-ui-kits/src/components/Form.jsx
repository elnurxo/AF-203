import React from "react";
import { useRef } from "react";
import CustomInput from "./CustomInput";

const Form = () => {
  let inputRef = useRef();
  function handleFocus() {
    inputRef.current.focus();
  }
  return (
    <>
      <CustomInput ref={inputRef} />
      <button onClick={handleFocus}>focus input</button>
    </>
  );
};

export default Form;

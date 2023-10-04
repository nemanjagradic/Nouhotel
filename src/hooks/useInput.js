import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isChanged, setIsChanged] = useState(false);

  const changeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const blurHandler = () => {
    setIsChanged(true);
  };

  const enteredValueIsValid = validateValue(enteredValue);
  const enteredValueIsInvalid = !enteredValueIsValid && isChanged;

  const reset = () => {
    setEnteredValue("");
    setIsChanged(false);
  };

  return {
    enteredValue,
    changeHandler,
    blurHandler,
    enteredValueIsValid,
    enteredValueIsInvalid,
    reset,
  };
};

export default useInput;

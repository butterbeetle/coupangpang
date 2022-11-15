import { useState } from "react";

const useInput = (validatedValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const valueIsValid = validatedValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouch(false);
    setIsTouched(true);
  };

  const focusHandler = () => {
    if (!hasError) setIsTouch(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouch(false);
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    isTouch,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    focusHandler,
    reset,
  };
};

export default useInput;

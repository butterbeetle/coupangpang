import { useState } from "react";

const useInput = () => {
  const [touched, setTouched] = useState(false);
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    if (!touched) setTouched(true);
    setClick(true);
  };
  const blurHandler = () => {
    setClick(false);
  };

  return {
    click,
    touched,
    clickHandler,
    blurHandler,
  };
};

export default useInput;

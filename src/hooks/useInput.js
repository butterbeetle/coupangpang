import { useState } from "react";

const useInput = () => {
  const [touched, setTouched] = useState(false);
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(true);
  };
  const blurHandler = () => {
    if (!touched) setTouched(true);
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

import { useState } from "react";

// 정규식 이용해서 검사하는 용
const isEmail = (value) => {
  const pattern = //eslint-disable-next-line
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return pattern.test(value);
};

const isPasswd = (value) => {
  // 영문/숫자/특수문자 2가지 이상 조합 (8~20자)
  const pattern = //eslint-disable-next-line
    /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/;
  // 3개 이상 연속되거나 동일한 문자/숫자 제외
  const pattern2 = //eslint-disable-next-line
    /^([0-9]{3}|[a-z]{3}|[A-Z]{3})|((\w)\1\1)/;
  // // 아이디(이메일) 제외
  const pattern3 = "A"; //eslint-disable-next-line
  return pattern.test(value);
};

const isName = (value) => {
  const pattern = //eslint-disable-next-line
    /^[a-zA-Z가-힣][a-zA-Z가-힣]*$/;
  return pattern.test(value);
};
const isPhone = (value) => {
  const pattern = //eslint-disable-next-line
    /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
  return pattern.test(value);
};

const useInput = (type) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  let valueIsValid = false;

  switch (type) {
    case 1:
      valueIsValid = isEmail(enteredValue);
      break;
    case 2:
      valueIsValid = isPasswd(enteredValue);
      break;
    case 3:
      valueIsValid = isEmail(enteredValue);
      break;
    case 4:
      valueIsValid = isName(enteredValue);
      break;
    case 5:
      valueIsValid = isPhone(enteredValue);
      break;
    default: //NOTHING
  }

  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
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

import { useState } from "react";

// 정규식 이용해서 검사하는 용
const isEmail = (value) => {
  const pattern = //eslint-disable-next-line
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return pattern.test(value);
};

let emailValue = "";

const isPasswd = (value) => {
  const isError = [false, false, false];

  // 영문/숫자/특수문자 2가지 이상 조합 (8~20자)
  // true: 경우 조건 달성, false: error
  const pattern = //eslint-disable-next-line
    /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/;
  console.log("Pattern:", pattern.test(value));
  // 3개 이상 연속되거나 동일한 문자/숫자 제외
  // true: , false:
  const pattern2 = //eslint-disable-next-line
    /(\w){3,}/;
  console.log("Pattern2:", pattern2.test(value));
  const pattern3 = //eslint-disable-next-line
    /(\w)\1\1/;
  console.log("Pattern3:", pattern3.test(value));
  // 아이디(이메일) 제외
  // -1이면 같지않음, 0이면 email과 같음
  const pattern4 = value.search(emailValue);
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
  // 입력을 시도했거나 그냥 input을 클릭했다 바깥클릭
  const [isBlur, setIsBlur] = useState(false);
  // 입력을 시도하려고 누를 때
  const [isFocus, setIsFocus] = useState(false);
  // 무언갈 입력했을 때
  const [isInput, setIsInput] = useState(false);
  // 입력된 값
  const [enteredValue, setEnteredValue] = useState("");

  let valueIsValid = false;
  switch (type) {
    case 1:
      // valueIsValid = true 일때 조건 만족
      valueIsValid = isEmail(enteredValue);
      break;
    case 2:
      // valueIsValid = true 일때 조건 만족
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

  // valueIsValid = false 즉 요구조건을 통과못하고
  // isBlur = true 한번이라도 input창을 클릭했고,
  // isFocus = false 현재 input창을 focus중이 아닐때
  const hasError = !valueIsValid && isBlur && !isFocus;

  const valueChangeHandler = (event) => {
    if (event.target.value) {
      setIsInput(true);
    } else {
      setIsInput(false);
    }
    // email 이면 enteredValue 저장
    if (type === 1) {
      emailValue = event.target.value;
    }
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    // console.log("Blur !!");
    setIsFocus(false);
    setIsBlur(true);
  };

  const focusHandler = () => {
    // console.log("Focus !!", valueIsValid);
    // valueIsValid 가 true 즉 조건을 만족했을 때
    // input이 focus 즉 Focus 되는 경우
    if (type === 2) setIsFocus(true);
    if (valueIsValid) setIsFocus(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsFocus(false);
    setIsBlur(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    isFocus,
    isBlur,
    isInput,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    focusHandler,
    reset,
  };
};

export default useInput;

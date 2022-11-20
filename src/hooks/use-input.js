import { useState } from "react";

// 정규식 이용해서 검사하는 용
const isEmail = (value) => {
  const pattern = //eslint-disable-next-line
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return pattern.test(value);
};

let emailValue = "";
let passwdValue = "";

/**
 * @param {string} str a sentence to be examined
 * @param {integer} limit Maximum allowable.
 * @returns true or false
 */
const isContiguous = (str = "", limit = 3) => {
  if (!str.trim()) return false;

  const unicodeStr = [...str].map((char) => char.charCodeAt());

  let preStr = 0;
  let chr = 0;

  unicodeStr.forEach((code) => {
    if (Math.abs(preStr - code) === 1) {
      chr++;
    }
    preStr = code;
  });

  return chr >= limit - 1;
};

const isPasswd = (value) => {
  // true: clear, false: error
  const isClear = [true, true, true];

  // 영문/숫자/특수문자 2가지 이상 조합 (8~20자)
  const pattern1 = //eslint-disable-next-line
    /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/;

  // 3개 이상 연속된 문자/숫자 제외
  const result = isContiguous(value, 3);

  //3개 이상 동일한 문자/숫자 제외
  const pattern2 = //eslint-disable-next-line
    /(\w)\1\1/;

  // 아이디(이메일) 제외
  // -1이면 같지않음, 0이면 email과 같음
  const pattern3 =
    emailValue.length > 0 ? (value === emailValue ? true : false) : false;

  isClear[0] = pattern1.test(value);
  isClear[1] = result || pattern2.test(value) ? false : true;
  isClear[2] = !pattern3;

  return isClear;
};

const isPasswdConfirm = (value) => {
  return passwdValue.length > 0
    ? value === passwdValue
      ? true
      : false
    : false;
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
  let passwdResult = [];
  let hasError = false;

  switch (type) {
    case 1:
      valueIsValid = isEmail(enteredValue);
      break;
    case 2:
      passwdResult = isPasswd(enteredValue);
      const passwdIsClear = passwdResult.filter((isClear) => !isClear);
      // console.log("Passwd Error count:", passwdIsClear.length, passwdResult);
      if (passwdIsClear.length > 0) {
        valueIsValid = false;
      } else {
        valueIsValid = true;
      }
      // console.log("Passwd value Valid:", valueIsValid);
      break;
    case 3:
      valueIsValid = isPasswdConfirm(enteredValue);
      console.log(enteredValue, valueIsValid);
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
  // isBlur = true 한번이라도 input창을 클릭했을 때
  if (type === 2) {
    hasError = !valueIsValid && isBlur && isInput;
    //   console.log("Passwd hasError?", hasError, valueIsValid, isBlur);
  } else if (type === 3) {
    hasError = !valueIsValid && isInput;
    console.log("hasError:", hasError);
  } else {
    hasError = !valueIsValid && isBlur;
  }

  const valueChangeHandler = (event) => {
    if (event.target.value) {
      setIsInput(true);
    }
    // email 이면 enteredValue 저장
    if (type === 1) {
      emailValue = event.target.value;
    } else if (type === 2) {
      passwdValue = event.target.value;
    }
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsFocus(false);
    setIsBlur(true);
  };

  const focusHandler = () => {
    if (!hasError) setIsFocus(true);
    if (type === 2 || type === 3) setIsFocus(true);
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
    passwdIsClear: passwdResult,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    focusHandler,
    reset,
  };
};

export default useInput;

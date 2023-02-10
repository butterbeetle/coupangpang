import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/use-input";
import { loggedActions } from "../../store";
import { AuthModal } from "../../UI/AuthModal";
import styles from "./JoinForm.module.css";
import Terms from "./Terms";

const EMAIL = 1;
const PASSWD = 2;
const PASSWD_CONFIRM = 3;
const NAME = 4;
const PHONE = 5;

const passwdInit = [
  {
    type: "condition",
    text: "영문/숫자/특수문자 2가지 이상 조합 (8~20자)",
    isColor: "gray",
    isClear: true,
  },
  {
    type: "condition",
    text: "3개 이상 연속되거나 동일한 문자/숫자 제외",
    isColor: "gray",
    isClear: true,
  },
  {
    type: "condition",
    text: "아이디(이메일) 제외",
    isColor: "gray",
    isClear: true,
  },
  {
    type: "clear",
    text: "사용 가능한 비밀번호입니다.",
    isColor: "green",
    isClear: true,
  },
];

const passwdConfirmInit = [
  {
    text: "확인을 위해 새 비밀번호를 다시 입력해주세요.",
    isColor: "gray",
  },
  {
    text: "새 비밀번호가 일치하지 않습니다.",
    isColor: "red",
  },
  {
    text: "새 비밀번호가 일치합니다.",
    isColor: "green",
  },
];

const JoinForm = () => {
  //TODO : 회원가입 페이지 useForm 써서 깔끔하게 변경하기
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    isFocus: emailFocus,
    isBlur: emailBlur,
    isInput: emailInput,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    focusHandler: emailFocusHandler,
  } = useInput(EMAIL);

  const {
    value: enteredPasswd,
    isValid: enteredPasswdIsValid,
    isFocus: passwdFocus,
    isBlur: passwdBlur,
    isInput: passwdInput,
    passwdIsClear,
    hasError: passwdInputHasError,
    valueChangeHandler: passwdChangeHandler,
    inputBlurHandler: passwdBlurHandler,
    focusHandler: passwdFocusHandler,
  } = useInput(PASSWD);

  const {
    value: enteredPasswdConfirm,
    isValid: enteredPasswdConfirmIsValid,
    isFocus: passwdConfirmFocus,
    isBlur: passwdConfirmBlur,
    isInput: passwdConfirmInput,
    hasError: passwdConfirmInputHasError,
    valueChangeHandler: passwdConfirmChangeHandler,
    inputBlurHandler: passwdConfirmBlurHandler,
    focusHandler: passwdConfirmFocusHandler,
  } = useInput(PASSWD_CONFIRM);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    isFocus: nameFocus,
    isBlur: nameBlur,
    isInput: nameInput,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    focusHandler: nameFocusHandler,
  } = useInput(NAME);

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    isFocus: phoneFocus,
    isBlur: phoneBlur,
    isInput: phoneInput,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    focusHandler: phoneFocusHandler,
  } = useInput(PHONE);

  // email
  const stylesInputEmail = emailInputHasError ? `${styles.invalid}` : "";
  const stylesFocusEmail = emailFocus ? `${styles.focus}` : "";
  // passwd
  const passwdTempData = [...passwdInit];
  let passwdData = [];

  // const stylesInputPasswd = !isPasswdInput
  //   ? passwdInputHasError
  //     ? `${styles.invalid}`
  //     : ""
  //   : "";

  // console.log(isPasswdInput);

  const stylesFocusPasswd = passwdInput
    ? passwdInputHasError
      ? `${styles.invalid}`
      : passwdFocus
      ? `${styles.focus}`
      : ""
    : passwdFocus
    ? `${styles.focus}`
    : "";

  passwdIsClear.filter((isClear, index) =>
    !isClear
      ? (passwdTempData[index].isClear = false)
      : (passwdTempData[index].isClear = true)
  );

  for (let i = 0; i < passwdTempData.length; i++) {
    if (passwdTempData[i].type === "condition") {
      if (passwdInput) {
        !passwdTempData[i].isClear
          ? (passwdTempData[i].isColor = "red")
          : (passwdTempData[i].isColor = "green");
      } else {
        passwdTempData[i].isColor = "gray";
      }
      if (!enteredPasswd.length) {
        passwdTempData[i].isColor = "gray";
      }
    }
  }
  const index = passwdTempData.findIndex((item) => item.type === "clear");
  const clearCnt = passwdIsClear.filter((isClear) => isClear).length;

  if (passwdFocus || passwdBlur) {
    if (passwdInputHasError || clearCnt < 3) {
      passwdData = passwdTempData.slice(0, index);
    } else {
      passwdData = passwdTempData.slice(index);
    }
    // console.log(!passwdInputHasError, !passwdFocus, passwdBlur);
  }

  // passwdConfirm
  const passwdConfirmTemp = [...passwdConfirmInit];
  let passwdConfirmData = [];

  if (passwdConfirmInput) passwdConfirmTemp[0].isColor = "red";

  if (passwdConfirmFocus || passwdConfirmBlur) {
    if (enteredPasswdConfirm.length > 0) {
      if (passwdConfirmInputHasError) {
        passwdConfirmData = passwdConfirmTemp.slice(1, 2);
      } else {
        passwdConfirmData = passwdConfirmTemp.slice(-1);
      }
    } else {
      passwdConfirmData = passwdConfirmTemp.slice(0, 1);
    }
  }

  const stylesFocusPasswdConfirm = passwdConfirmInput
    ? passwdConfirmInputHasError
      ? `${styles.invalid}`
      : passwdConfirmFocus
      ? `${styles.focus}`
      : ""
    : passwdConfirmFocus
    ? `${styles.focus}`
    : "";
  // console.log(
  //   passwdConfirmInput,
  //   passwdConfirmInputHasError,
  //   passwdConfirmFocus
  // );

  // name
  const stylesInputName = nameInputHasError ? `${styles.invalid}` : "";
  const stylesFocusName = nameFocus ? `${styles.focus}` : "";

  // phone
  const stylesInputPhone = phoneInputHasError ? `${styles.invalid}` : "";
  const stylesFocusPhone = phoneFocus ? `${styles.focus}` : "";

  const [essentCheck, setEssentCheck] = useState(false);

  const [modalInfo, setModalInfo] = useState(null);

  const navigate = useNavigate();

  const modalConfirmHandler = () => {
    setModalInfo(null);
  };

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    // setBtnTouch(true);

    if (
      !enteredEmailIsValid &&
      !enteredPasswdIsValid &&
      !enteredPasswdConfirmIsValid &&
      !enteredNameIsValid &&
      !enteredPhoneIsValid &&
      !essentCheck
    ) {
      if (!essentCheck) setEssentCheck(false);
      return;
    }

    // resetEmailInput();
    // resetPasswdInput();
    // resetPasswdConfirmInput();
    // resetNameInput();
    // resetPhoneInput();

    // console.log(
    //   enteredEmail,
    //   enteredPasswd,
    //   enteredPasswdConfirm,
    //   enteredName,
    //   enteredPhone,
    //   optionItems,
    //   event
    // );

    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCnzUriRYYCPwUKN4YWiZsHDHKI-5TKBWk";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPasswd,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        dispatch(
          loggedActions.register({
            email: enteredEmail,
            name: enteredName,
            phone: enteredPhone,
          })
        );
        navigate("/login");
      } else {
        return res.json().then((data) => {
          if (data && data.error && data.error.message) {
            console.log(data);
          }
        });
      }
    });
  };
  return (
    <Fragment>
      <header className={styles.login__header}>
        <Link to="/">
          <span className={styles.login__header__logo}> </span>
        </Link>
      </header>
      <main>
        {modalInfo && (
          <AuthModal modalType={modalInfo} onConfirm={modalConfirmHandler} />
        )}
        <section className={styles.auth}>
          <p className={styles["auth-text"]}>회원정보를 입력해주세요</p>
          <form className={styles["auth-form"]} onSubmit={submitHandler}>
            <div>
              <div>
                <div className={styles["auth-form__content"]}>
                  <label
                    htmlFor="email"
                    className={`
    ${styles["auth-form__label"]}
    ${stylesFocusEmail}
    ${stylesInputEmail}`}
                  >
                    <div>
                      <span className={styles["auth-form__icon--email"]}></span>
                    </div>
                    <input
                      onChange={emailChangeHandler}
                      onBlur={emailBlurHandler}
                      onFocus={emailFocusHandler}
                      id="email"
                      placeholder="아이디(이메일)"
                      type="text"
                      value={enteredEmail}
                    ></input>
                    {!emailInputHasError && !emailFocus && emailBlur && (
                      <span className={styles["auth-form__icon--check"]}></span>
                    )}
                  </label>
                </div>
                {emailInputHasError && (
                  <div className={styles["error"]}>
                    {emailInput ? (
                      <p className={styles["red-text"]}>
                        이메일을 올바르게 입력해주세요.
                      </p>
                    ) : (
                      <p className={styles["red-text"]}>이메일을 입력하세요.</p>
                    )}
                  </div>
                )}

                <div className={styles["auth-form__content"]}>
                  <label
                    htmlFor="passwd"
                    className={`
    ${styles["auth-form__label"]}
    ${stylesFocusPasswd}`}
                  >
                    <div>
                      <span
                        className={styles["auth-form__icon--passwd"]}
                      ></span>
                    </div>
                    <input
                      onChange={passwdChangeHandler}
                      onBlur={passwdBlurHandler}
                      onFocus={passwdFocusHandler}
                      id="passwd"
                      placeholder="비밀번호"
                      type="text"
                      value={enteredPasswd}
                    ></input>
                    {!passwdInputHasError &&
                      !passwdFocus &&
                      passwdBlur &&
                      passwdInput && (
                        <span
                          className={styles["auth-form__icon--check"]}
                        ></span>
                      )}
                  </label>
                </div>
                {passwdData.map((data, index) => (
                  <div key={index} className={styles["error"]}>
                    <span className={styles[`${data.isColor}-icon`]}></span>
                    <p className={styles[`${data.isColor}-text`]}>
                      {data.text}
                    </p>
                  </div>
                ))}

                <div className={styles["auth-form__content"]}>
                  <label
                    htmlFor="passwd-confirm"
                    className={`
    ${styles["auth-form__label"]}
    ${stylesFocusPasswdConfirm}`}
                  >
                    <div>
                      <span
                        className={styles["auth-form__icon--passwd--confirm"]}
                      ></span>
                    </div>
                    <input
                      onChange={passwdConfirmChangeHandler}
                      onBlur={passwdConfirmBlurHandler}
                      onFocus={passwdConfirmFocusHandler}
                      id="passwd-confirm"
                      placeholder="비밀번호 확인"
                      type="text"
                      value={enteredPasswdConfirm}
                    ></input>
                    {!passwdConfirmInputHasError &&
                      !passwdConfirmFocus &&
                      passwdConfirmBlur &&
                      passwdConfirmInput &&
                      enteredPasswdConfirm && (
                        <span
                          className={styles["auth-form__icon--check"]}
                        ></span>
                      )}
                  </label>
                </div>
                {passwdConfirmData.map((data, index) => (
                  <div key={index} className={styles["error"]}>
                    <span className={styles[`${data.isColor}-icon`]}></span>
                    <p className={styles[`${data.isColor}-text`]}>
                      {data.text}
                    </p>
                  </div>
                ))}

                <div className={styles["auth-form__content"]}>
                  <label
                    htmlFor="name"
                    className={`
    ${styles["auth-form__label"]}
    ${stylesFocusName}
    ${stylesInputName}`}
                  >
                    <div>
                      <span className={styles["auth-form__icon--name"]}></span>
                    </div>
                    <input
                      onChange={nameChangeHandler}
                      onBlur={nameBlurHandler}
                      onFocus={nameFocusHandler}
                      id="name"
                      placeholder="이름"
                      type="text"
                      value={enteredName}
                    ></input>
                    {!nameInputHasError && !nameFocus && nameBlur && (
                      <span className={styles["auth-form__icon--check"]}></span>
                    )}
                  </label>
                </div>
                {nameInputHasError && (
                  <div className={styles["error"]}>
                    {nameInput ? (
                      <p className={styles["red-text"]}>
                        이름을 정확히 입력하세요.
                      </p>
                    ) : (
                      <p className={styles["red-text"]}>이름을 입력하세요.</p>
                    )}
                  </div>
                )}

                <div className={styles["auth-form__content"]}>
                  <label
                    htmlFor="phone"
                    className={`
    ${styles["auth-form__label"]}
    ${stylesFocusPhone}
    ${stylesInputPhone}`}
                  >
                    <div>
                      <span className={styles["auth-form__icon--phone"]}></span>
                    </div>
                    <input
                      onChange={phoneChangeHandler}
                      onBlur={phoneBlurHandler}
                      onFocus={phoneFocusHandler}
                      id="phone"
                      placeholder="휴대폰 번호"
                      type="text"
                      value={enteredPhone}
                    ></input>
                    {!phoneInputHasError && !phoneFocus && phoneBlur && (
                      <span className={styles["auth-form__icon--check"]}></span>
                    )}
                  </label>
                </div>
                {phoneInputHasError && (
                  <div className={styles["error"]}>
                    {phoneInput ? (
                      <p className={styles["red-text"]}>
                        휴대폰 번호를 정확하게 입력하세요.
                      </p>
                    ) : (
                      <p className={styles["red-text"]}>
                        휴대폰 번호를 입력하세요.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <Terms />
            <button className={styles["auth-form__button"]}>
              동의하고 가입하기
            </button>
          </form>
        </section>
      </main>

      <footer className={styles.login__footer}>
        <div>
          <p>©Coupang Corp. All rights reserved</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default JoinForm;

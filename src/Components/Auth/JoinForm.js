import { useEffect, useState } from "react";
import useInput from "../../hooks/use-input";
import { AuthModal } from "../../UI/AuthModal";
import styles from "./JoinForm.module.css";

const EMAIL = 1;
const PASSWD = 2;
const PASSWD_CONFIRM = 3;
const NAME = 4;
const PHONE = 5;

const essentialTermsData = [
  {
    id: "terms_age",
    text: "[필수] 만 14세 이상입니다",
    isCheck: false,
    isArrow: false,
  },
  {
    id: "terms_service",
    text: "[필수] 쿠팡 이용약관 동의",
    isCheck: false,
    isArrow: true,
  },
  {
    id: "terms_commerce",
    text: "[필수] 전자금융거래 이용약관 동의",
    isCheck: false,
    isArrow: true,
  },
  {
    id: "terms_collection_userInfo",
    text: "[필수] 개인정보 수집 및 이용 동의",
    isCheck: false,
    isArrow: true,
  },
  {
    id: "terms_collection_userInfo_thirdParty",
    text: "[필수] 개인정보 제3자 제공 동의",
    isCheck: false,
    isArrow: true,
  },
];

const optionalTermsData = [
  {
    id: "terms_marketing",
    text: "[선택] 마케팅 목적의 개인정보 수집 및 이용 동의",
    isCheck: false,
    isArrow: true,
  },
  {
    id: "terms_SMS",
    text: "[선택] 광고성 정보 수신 동의",
    isCheck: false,
    isArrow: true,
  },
  {
    id: "terms_SMS_email",
    text: "[선택] 이메일 수신 동의",
    isCheck: false,
    isArrow: false,
  },
  {
    id: "terms_SMS_sms",
    text: "[선택] SMS, SNS 수신 동의",
    isCheck: false,
    isArrow: false,
  },
  {
    id: "terms_SMS_app",
    text: "[선택] 앱 푸시 수신 동의",
    isCheck: false,
    isArrow: false,
  },
];

const JoinForm = () => {
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    isTouch: emailTouch,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    focusHandler: emailFocusHandler,
    reset: resetEmailInput,
  } = useInput(EMAIL);

  const {
    value: enteredPasswd,
    isValid: enteredPasswdIsValid,
    isTouch: passwdTouch,
    hasError: passwdInputHasError,
    valueChangeHandler: passwdChangeHandler,
    inputBlurHandler: passwdBlurHandler,
    focusHandler: passwdFocusHandler,
    reset: resetPasswdInput,
  } = useInput(PASSWD);

  const {
    value: enteredPasswdConfirm,
    isValid: enteredPasswdConfirmIsValid,
    isTouch: passwdConfirmTouch,
    hasError: passwdConfirmInputHasError,
    valueChangeHandler: passwdConfirmChangeHandler,
    inputBlurHandler: passwdConfirmBlurHandler,
    focusHandler: passwdConfirmFocusHandler,
    reset: resetPasswdConfirmInput,
  } = useInput(PASSWD_CONFIRM);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    isTouch: nameTouch,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    focusHandler: nameFocusHandler,
    reset: resetNameInput,
  } = useInput(NAME);

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    isTouch: phoneTouch,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    focusHandler: phoneFocusHandler,
    reset: resetPhoneInput,
  } = useInput(PHONE);

  const [isAllCheck, setIsAllCheck] = useState(false);
  const [essentItems, setEssentItems] = useState(essentialTermsData);
  const [optionItems, setOptionItems] = useState(optionalTermsData);

  const [modalClicked, setModalClicked] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  useEffect(() => {
    // Check 되지 않은 item 개수
    const tempArray = [...essentItems, ...optionItems];
    const result = tempArray.filter((item) => item.isCheck === false);

    // Check 되지 않은 item 개수 가 0이 되면 모두 체크된 것으로 판단함.
    if (!result.length) {
      setIsAllCheck(true);
    } else {
      setIsAllCheck(false);
    }
  }, [essentItems, optionItems]);

  const [isPasswdInput, setIsPasswdInput] = useState(false);

  useEffect(() => {
    setIsPasswdInput(true);
  }, [enteredPasswd]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      !enteredEmailIsValid &&
      !enteredNameIsValid &&
      !enteredPhoneIsValid &&
      !enteredPasswdIsValid &&
      !enteredPasswdConfirmIsValid
    )
      return;

    resetEmailInput();
    resetPasswdInput();
    resetPasswdConfirmInput();
    resetNameInput();
    resetPhoneInput();
  };

  const stylesInputEmail = emailInputHasError ? `${styles.invalid}` : "";
  const stylesTouchEmail = emailTouch ? `${styles.touch}` : "";

  const stylesInputPasswd = !isPasswdInput
    ? passwdInputHasError
      ? `${styles.invalid}`
      : ""
    : "";
  const stylesTouchPasswd = passwdTouch ? `${styles.touch}` : "";
  const stylesTouchText = passwdTouch ? `${styles["error--text--touch"]}` : "";

  const stylesInputPasswdConfirm = passwdConfirmInputHasError
    ? `${styles.invalid}`
    : "";
  const stylesTouchPasswdConfirm = passwdConfirmTouch ? `${styles.touch}` : "";

  const stylesInputName = nameInputHasError ? `${styles.invalid}` : "";
  const stylesTouchName = nameTouch ? `${styles.touch}` : "";

  const stylesInputPhone = phoneInputHasError ? `${styles.invalid}` : "";
  const stylesTouchPhone = phoneTouch ? `${styles.touch}` : "";

  const stylesTermsIcon = isAllCheck
    ? styles["terms__icon--on"]
    : styles["terms__icon--off"];

  // 모두 확인하였으며 동의합니다.
  const allCheckHandler = () => {
    const copyEssentItems = [...essentItems];
    const copyOptionItems = [...optionItems];

    // Check 되지 않은 [필수] 아이템 개수
    const filterEssentItems = copyEssentItems.filter(
      (item) => item.isCheck === false
    );

    // Check 되지 않은 [선택] 아이템 개수
    const filterOptionItems = copyOptionItems.filter(
      (item) => item.isCheck === false
    );

    if (filterEssentItems.length === 0 && filterOptionItems.length === 0) {
      // 모두 체크되었다면
      copyEssentItems.map((item) => (item.isCheck = false));
      copyOptionItems.map((item) => (item.isCheck = false));
    } else {
      // 모두 체크되지 않거나 일부만 체크 되었다면
      // isCheck가 false인 item을 찾아서 true로 변경함.
      copyEssentItems
        .filter((item) => item.isCheck === false)
        .map((item) => (item.isCheck = true));

      copyOptionItems
        .filter((item) => item.isCheck === false)
        .map((item) => (item.isCheck = true));
    }
    setEssentItems((prevState) => (prevState = copyEssentItems));
    setOptionItems((prevState) => (prevState = copyOptionItems));
  };

  // [필수] 아이템 체크박스 눌렀을 때
  const essentItemCheckHandler = (event) => {
    // 어느 Item의 체크박스를 체크했는지 htmlfor로 {item.id}를 가져옴.
    const targetId = event.currentTarget.getAttribute("for");

    let copyItems = [...essentItems];
    // termsItem의 id와 targetId를 비교해서 찾음
    const idx = copyItems.findIndex((item) => item.id === targetId);

    // index item의 isCheck를 변경
    copyItems[idx].isCheck = !copyItems[idx].isCheck;

    setEssentItems((prevState) => (prevState = copyItems));
  };

  // [선택] 아이템 체크박스 눌렀을 때
  const optionItemCheckHandler = (event) => {
    let copyItems = [...optionItems];
    // 어느 Item의 체크박스를 체크했는지 htmlfor로 {item.id}를 가져옴.
    const targetId = event.currentTarget.getAttribute("for");

    // termsItem의 id와 targetId를 비교해서 찾음
    const targetIndex = copyItems.findIndex((item) => item.id === targetId);

    if (targetId === "terms_marketing") {
      // [선택] 마케팅 목적의 개인정보 수집 및 이용 동의
      if (copyItems[targetIndex].isCheck) {
        copyItems
          .filter((item, idx) => idx >= targetIndex)
          .map((item) => (item.isCheck = false));
      } else {
        copyItems
          .filter((item, idx) => idx >= targetIndex)
          .map((item) => (item.isCheck = true));
      }
    } else if (targetId === "terms_SMS") {
      //[선택] 광고성 정보 수신 동의
      if (copyItems[targetIndex].isCheck) {
        copyItems
          .filter((item, idx) => idx >= targetIndex)
          .map((item) => (item.isCheck = false));
      } else {
        if (!copyItems[targetIndex - 1].isCheck) {
          copyItems[targetIndex - 1].isCheck = true;
        }
        copyItems
          .filter((item, idx) => idx >= targetIndex)
          .map((item) => (item.isCheck = true));
      }
    } else {
      // [선택] 이메일 수신 동의 / SMS, SNS수신 동의 / 앱 푸시 수신 동의
      copyItems[targetIndex].isCheck = !copyItems[targetIndex].isCheck;
      if (copyItems[targetIndex].isCheck) {
        copyItems
          .filter(
            (item) => item.id === "terms_marketing" || item.id === "terms_SMS"
          )
          .map((item) => (item.isCheck = true));
      } else {
        const smsLength = copyItems
          .filter(
            (item) =>
              item.id === "terms_SMS_email" ||
              item.id === "terms_SMS_sms" ||
              item.id === "terms_SMS_app"
          )
          .filter((item) => item.isCheck === true);
        if (smsLength.length === 0) {
          const idx = copyItems.findIndex((item) => item.id === "terms_SMS");
          copyItems[idx].isCheck = false;
        }
      }
    }

    setOptionItems((prevState) => (prevState = copyItems));
  };

  // > 클릭 시 Modal 창
  const modalClickHandler = (id) => {
    setModalInfo(id);
  };
  const modalConfirmHandler = () => {
    setModalInfo(null);
  };

  return (
    <main>
      {modalInfo && (
        <AuthModal modalType={modalInfo} onConfirm={modalConfirmHandler} />
      )}
      <section className={styles.auth}>
        <p className={styles["auth-text"]}>회원정보를 입력해주세요</p>
        <form className={styles["auth-form"]} onSubmit={submitHandler}>
          <div>
            <div className={styles["auth-form__content"]}>
              <label
                htmlFor="email"
                className={`
    ${styles["auth-form__label"]}
    ${stylesTouchEmail}
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
                {/* <span className={styles["auth-form__icon--hide"]}></span> */}
              </label>
            </div>
            {emailInputHasError && (
              <div className={styles["error"]}>
                <p className={styles["error-text"]}>이메일을 입력하세요.</p>
              </div>
            )}

            <div className={styles["auth-form__content"]}>
              <label
                htmlFor="passwd"
                className={`
    ${styles["auth-form__label"]}
    ${stylesTouchPasswd}
    ${stylesInputPasswd}`}
              >
                <div>
                  <span className={styles["auth-form__icon--passwd"]}></span>
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
              </label>
            </div>
            {(passwdTouch || passwdInputHasError) && (
              <>
                <div className={styles["error"]}>
                  <span className={styles["error-icon"]}></span>
                  <p className={`${styles["error-text"]} ${stylesTouchText}`}>
                    영문/숫자/특수문자 2가지 이상 조합 (8~20자)
                  </p>
                </div>
                <div className={styles["error"]}>
                  <span className={styles["error-icon"]}></span>
                  <p className={`${styles["error-text"]} ${stylesTouchText}`}>
                    3개 이상 연속되거나 동일한 문자/숫자 제외
                  </p>
                </div>
                <div className={styles["error"]}>
                  <span className={styles["error-icon"]}></span>
                  <p className={`${styles["error-text"]} ${stylesTouchText}`}>
                    아이디(이메일) 제외
                  </p>
                </div>
              </>
            )}

            <div className={styles["auth-form__content"]}>
              <label
                htmlFor="passwd-confirm"
                className={`
    ${styles["auth-form__label"]}
    ${stylesTouchPasswdConfirm}
    ${stylesInputPasswdConfirm}`}
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
              </label>
            </div>
            {passwdConfirmInputHasError && (
              <div className={styles["error"]}>
                <span className={styles["error-icon"]}></span>
                <p className={`${styles["error-text"]} `}>
                  확인을 위해 새 비밀번호를 다시 입력해주세요.
                </p>
              </div>
            )}

            <div className={styles["auth-form__content"]}>
              <label
                htmlFor="name"
                className={`
    ${styles["auth-form__label"]}
    ${stylesTouchName}
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
              </label>
            </div>
            {nameInputHasError && (
              <div className={styles["error"]}>
                <p className={styles["error-text"]}>
                  이름을 정확히 입력하세요.
                </p>
              </div>
            )}

            <div className={styles["auth-form__content"]}>
              <label
                htmlFor="phone"
                className={`
    ${styles["auth-form__label"]}
    ${stylesTouchPhone}
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
              </label>
            </div>
            {phoneInputHasError && (
              <div className={styles["error"]}>
                <p className={styles["error-text"]}>
                  휴대폰 번호를 정확하게 입력하세요.
                </p>
              </div>
            )}
          </div>

          <section className={styles.terms}>
            <div className={styles["terms__all"]}>
              <div
                onClick={allCheckHandler}
                className={styles["terms__all--icon"]}
              >
                <i className={`${stylesTermsIcon}`}></i>
                <p>모두 확인하였으며 동의합니다.</p>
              </div>
              <div className={styles["terms__all--text"]}>
                <p>
                  전체 동의에는 필수 및 선택 정보에 대한 동의가 포함되어 있으며,
                  개별적으로 동의를 선택 하실 수 있습니다. 선택 항목에 대한
                  동의를 거부하시는 경우에도 서비스 이용이 가능합니다
                </p>
              </div>
            </div>
            <div className={styles["terms__each"]}>
              <ul className={styles["terms__each--items"]}>
                {essentItems.map((item, idx) => (
                  <li key={idx} className={styles["terms__each--item"]}>
                    <div className={styles["terms__each--item--box"]}>
                      <label htmlFor={item.id} onClick={essentItemCheckHandler}>
                        {item.isCheck ? (
                          <i className={styles["terms__icon--on"]}></i>
                        ) : (
                          <i className={styles["terms__icon--off"]}></i>
                        )}
                        <p>{item.text}</p>
                      </label>
                      {item.isArrow ? (
                        <button
                          onClick={() => modalClickHandler(item.id)}
                          className={styles["terms__icon--arrow"]}
                        ></button>
                      ) : (
                        ""
                      )}
                    </div>
                  </li>
                ))}

                {optionItems.map((item, idx) => (
                  <li key={idx} className={styles["terms__each--item"]}>
                    <div className={styles["terms__each--item--box"]}>
                      <label htmlFor={item.id} onClick={optionItemCheckHandler}>
                        {item.isCheck ? (
                          <i className={styles["terms__icon--on"]}></i>
                        ) : (
                          <i className={styles["terms__icon--off"]}></i>
                        )}
                        <p>{item.text}</p>
                      </label>
                      {item.isArrow ? (
                        <button
                          className={styles["terms__icon--arrow"]}
                        ></button>
                      ) : (
                        ""
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <button className={styles["auth-form__button"]}>
            동의하고 가입하기
          </button>
        </form>
      </section>
    </main>
  );
};

export default JoinForm;

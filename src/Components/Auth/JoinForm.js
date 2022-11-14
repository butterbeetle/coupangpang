import { useEffect, useState } from "react";
import useInput from "../../hooks/use-input";
import styles from "./JoinForm.module.css";

// 공백이 아닌가
const isEmpty = (value) => value.trim() !== "";
// 공백이 아니고 @를 포함하며 .com 혹은 .net을 포함하는가
const isEmail = (value) =>
  (isEmpty && value.includes("@") && value.includes(".com")) ||
  value.includes(".net");
const isName = (value) => {};
const isPhone = (value) => {};

const termsData = [
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
  {
    id: "terms_marketing",
    text: "[선택] 마케팅 목적의 개인정보 수집 및 이용 동의",
    isCheck: false,
    isArrow: true,
  },
  {
    id: "terms_marketing_ad",
    text: "[선택] 광고성 정보 수신 동의",
    isCheck: false,
    isArrow: true,
  },
  {
    id: "terms_marketing_ad_email",
    text: "[선택] 이메일 수신 동의",
    isCheck: false,
    isArrow: false,
  },
  {
    id: "terms_marketing_ad_sms",
    text: "[선택] SMS, SNS 수신 동의",
    isCheck: false,
    isArrow: false,
  },
  {
    id: "terms_marketing_ad_app",
    text: "[선택] 앱 푸시 수신 동의",
    isCheck: false,
    isArrow: false,
  },
];

const JoinForm = () => {
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isEmpty);

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput(isEmpty);

  const [isAllCheck, setIsAllCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);
  const [termsItems, setTermsItems] = useState(termsData);

  useEffect(() => {
    // Check 되지 않은 item 개수
    const result = termsItems.filter((item) => item.isCheck === false);

    // Check 되지 않은 item 개수 가 0이 되면 모두 체크된 것으로 판단함.
    if (!result?.length) {
      setIsAllCheck(true);
    } else {
      setIsAllCheck(false);
    }
  }, [termsItems]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid && !enteredNameIsValid) return;

    resetEmailInput();
    resetNameInput();
  };

  const stylesInputEmail = emailInputHasError ? `${styles.invalid}` : "";
  const stylesInputName = nameInputHasError ? `${styles.invalid}` : "";

  // 모두 동의 눌렀을 때
  const termsAllCheckedHandler = () => {
    let copyItems = [...termsItems];
    // Check 되지 않은 item 개수
    let filterItem = copyItems.filter((item) => item.isCheck === false);

    if (filterItem.length === 0) {
      // 모두 체크되었다면
      copyItems.map((item) => (item.isCheck = false));
    } else {
      // 모두 체크되지 않거나 몇몇만 체크 됐다면 isCheck가 false인 item을 찾아서 true로 변경함.
      copyItems
        .filter((item) => item.isCheck === false)
        .map((item) => (item.isCheck = true));
    }
    setTermsItems((prevState) => (prevState = copyItems));
  };

  const marketingCheckHandler = (marketingIdx) => {
    let copyItems = [...termsItems];

    if (copyItems[marketingIdx].id === "terms_marketing") {
      if (
        copyItems[marketingIdx].isCheck &&
        !copyItems[marketingIdx + 1].isCheck
      ) {
        copyItems[marketingIdx].isCheck = false;
      } else {
        copyItems
          .filter((item, idx) => idx >= marketingIdx)
          .map((item) => (item.isCheck = !item.isCheck));
      }
    } else if (copyItems[marketingIdx].id === "terms_marketing_ad") {
      if (!copyItems[marketingIdx - 1].isCheck)
        copyItems[marketingIdx - 1].isCheck = true;

      copyItems
        .filter((item, idx) => idx >= marketingIdx)
        .map((item) => (item.isCheck = !item.isCheck));
    }

    setTermsItems((prevState) => (prevState = copyItems));
  };

  // 각각 체크박스 눌렀을 때
  const termsCheckedHandler = (event) => {
    // 누구껄 눌렀는지 htmlfor로 item.id를 가져옴.
    const targetId = event.currentTarget.getAttribute("for");

    let copyItems = [...termsItems];
    // termsItem의 id와 targetId를 비교해서 찾음
    const idx = termsItems.findIndex((item) => item.id === targetId);

    const marketingIdx = termsItems.findIndex(
      (item) => item.id === "terms_marketing"
    );

    if (idx >= marketingIdx) {
      marketingCheckHandler(idx);
    } else {
      // index item의 isCheck를 변경
      copyItems[idx].isCheck = !copyItems[idx].isCheck;

      setTermsItems((prevState) => (prevState = copyItems));
    }
  };

  const stylesTermsIcon = isAllCheck
    ? styles["terms__icon--on"]
    : styles["terms__icon--off"];

  return (
    <main>
      <section className={styles.auth}>
        <p className={styles["auth-text"]}>회원정보를 입력해주세요</p>
        <form className={styles["auth-form"]} onSubmit={formSubmissionHandler}>
          <div>
            <div className={styles["auth-form__content"]}>
              <label
                htmlFor="email"
                className={`
    ${styles["auth-form__label"]}
    ${stylesInputEmail}`}
              >
                <div>
                  <span className={styles["auth-form__icon--email"]}></span>
                </div>
                <input
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  id="email"
                  placeholder="아이디(이메일)"
                  type="text"
                  value={enteredEmail}
                ></input>
                {/* <span className={styles["auth-form__icon--hide"]}></span> */}
              </label>
            </div>
            {emailInputHasError && (
              <p className={styles["error-text"]}>이메일을 입력하세요.</p>
            )}

            <div className={styles["auth-form__content"]}>
              <label
                htmlFor="passwd"
                className={`
    ${styles["auth-form__label"]}
    ${stylesInputEmail}`}
              >
                <div>
                  <span className={styles["auth-form__icon--passwd"]}></span>
                </div>
                <input
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  id="passwd"
                  placeholder="비밀번호"
                  type="text"
                  value={enteredEmail}
                ></input>
                {/* <span className={styles["auth-form__icon--hide"]}></span> */}
              </label>
            </div>
            {emailInputHasError && (
              <p className={styles["error-text"]}>이메일을 입력하세요.</p>
            )}

            <div className={styles["auth-form__content"]}>
              <label
                htmlFor="passwd-confirm"
                className={`
    ${styles["auth-form__label"]}
    ${stylesInputEmail}`}
              >
                <div>
                  <span
                    className={styles["auth-form__icon--passwd--confirm"]}
                  ></span>
                </div>
                <input
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  id="passwd-confirm"
                  placeholder="비밀번호 확인"
                  type="text"
                  value={enteredEmail}
                ></input>
                {/* <span className={styles["auth-form__icon--hide"]}></span> */}
              </label>
            </div>
            {emailInputHasError && (
              <p className={styles["error-text"]}>이메일을 입력하세요.</p>
            )}

            <div className={styles["auth-form__content"]}>
              <label
                htmlFor="name"
                className={`
    ${styles["auth-form__label"]}
    ${stylesInputName}`}
              >
                <div>
                  <span className={styles["auth-form__icon--name"]}></span>
                </div>
                <input
                  onChange={nameChangeHandler}
                  onBlur={nameBlurHandler}
                  id="name"
                  placeholder="이름"
                  type="text"
                  value={enteredName}
                ></input>
              </label>
            </div>
            {nameInputHasError && (
              <p className={styles["error-text"]}>이름을 정확히 입력하세요.</p>
            )}

            <div className={styles["auth-form__content"]}>
              <label
                htmlFor="phone"
                className={`
    ${styles["auth-form__label"]}
    ${stylesInputEmail}`}
              >
                <div>
                  <span className={styles["auth-form__icon--phone"]}></span>
                </div>
                <input
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  id="phone"
                  placeholder="휴대폰 번호"
                  type="text"
                  value={enteredEmail}
                ></input>
                {/* <span className={styles["auth-form__icon--hide"]}></span> */}
              </label>
            </div>
            {emailInputHasError && (
              <p className={styles["error-text"]}>
                휴대폰 번호를 정확하게 입력하세요.
              </p>
            )}
          </div>

          <section className={styles.terms}>
            <div className={styles["terms__all"]}>
              <div
                onClick={termsAllCheckedHandler}
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
                {termsItems.map((item, idx) => (
                  <li key={idx} className={styles["terms__each--item"]}>
                    <label htmlFor={item.id} onClick={termsCheckedHandler}>
                      {item.isCheck ? (
                        <i className={styles["terms__icon--on"]}></i>
                      ) : (
                        <i className={styles["terms__icon--off"]}></i>
                      )}
                      <p>{item.text}</p>
                      {item.isArrow ? (
                        <button
                          className={styles["terms__icon--arrow"]}
                        ></button>
                      ) : (
                        ""
                      )}
                    </label>
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

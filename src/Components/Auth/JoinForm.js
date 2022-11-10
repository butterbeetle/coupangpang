import useInput from "../../hooks/use-input";
import styles from "./JoinForm.module.css";

const isEmpty = (value) => value.trim() !== "";
const isEmail = (value) =>
  // 공백이 아니고 @를 포함하며 .com 혹은 .net을 포함하는가
  (isEmpty && value.includes("@") && value.includes(".com")) ||
  value.includes(".net");

const JoinForm = () => {
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid) return;

    resetEmailInput();
  };

  const stylesInputEmail = emailInputHasError ? `${styles.invalid}` : "";

  return (
    <main>
      <section className={styles.auth}>
        <p className={styles["auth-text"]}>회원정보를 입력해주세요</p>
        <form className={styles["auth-form"]} onSubmit={formSubmissionHandler}>
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
    ${stylesInputEmail}`}
            >
              <div>
                <span className={styles["auth-form__icon--name"]}></span>
              </div>
              <input
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                id="name"
                placeholder="이름"
                type="text"
                value={enteredEmail}
              ></input>
              {/* <span className={styles["auth-form__icon--hide"]}></span> */}
            </label>
          </div>
          {emailInputHasError && (
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

          <button className={styles["auth-form__button"]}>
            동의하고 가입하기
          </button>
        </form>
      </section>
    </main>
  );
};

export default JoinForm;

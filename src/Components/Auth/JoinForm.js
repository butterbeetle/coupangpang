import useInput from "../../hooks/use-input";
import styles from "./JoinForm.module.css";

const JoinForm = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) return;

    resetNameInput();
  };

  const InfoInputClasses = nameInputHasError ? `${styles.invalid}` : "";

  return (
    <main>
      <section className={styles.auth}>
        <p className={styles["auth-text"]}>회원정보를 입력해주세요</p>
        <form className={styles["auth-form"]} onSubmit={formSubmissionHandler}>
          <div className={styles["auth-form__content"]}>
            <label
              htmlFor="id"
              className={`
    ${styles["auth-form__label"]}
    ${InfoInputClasses}`}
            >
              <div>
                <span className={styles["auth-form__icon"]}></span>
              </div>
              <input
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                id="id"
                placeholder="아이디(이메일)"
                type="text"
                value={enteredName}
              ></input>
              <span className={styles["auth-form__icon--hide"]}></span>
            </label>
          </div>
          {nameInputHasError && (
            <p className={styles["error-text"]}>이메일을 입력하세요.</p>
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

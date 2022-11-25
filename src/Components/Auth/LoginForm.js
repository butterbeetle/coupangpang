import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  // 현재 눌렀는지
  const [isFocus, setIsFocus] = useState(false);
  // 누르고 밖으로 나온거
  const [isBlur, setIsBlur] = useState(false);
  // 입력했는지?
  const [isTouched, setIsTouched] = useState(false);

  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(
      (prevColor) =>
        (prevColor = isFocus
          ? isTouched
            ? styles["invalid"]
            : styles["focus"]
          : "")
    );
  }, [isFocus, isTouched]);

  const focusHandler = () => {
    setIsFocus((prev) => (prev = true));
    setIsBlur((prev) => (prev = false));
  };
  const blurHandler = () => {
    setIsFocus((prev) => (prev = false));
    setIsBlur((prev) => (prev = true));
  };
  const changeHandler = (event) => {
    setIsTouched(true);
    console.log("Input", event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submit");
  };
  console.log(
    "isFocus=>",
    isFocus,
    "isBlur=>",
    isBlur,
    "isTouched=>",
    isTouched,
    "color=>",
    color
  );

  return (
    <Fragment>
      <main className={styles["login"]}>
        <form className={styles["login__form"]} onSubmit={submitHandler}>
          <div className={styles["login__form--id"]}>
            <div className={styles["login__form--id--main"]}>
              <label
                htmlFor="id"
                className={`${styles["login__form--label"]} ${color}`}
                onFocus={focusHandler}
                onBlur={blurHandler}
                onChange={changeHandler}
              >
                <div>
                  <span className={styles["login__form--id--icon"]}></span>
                </div>
                <input id="id" placeholder="아이디(이메일)" type="text"></input>
              </label>
            </div>
            <p className={styles["login__form--error"]}>
              아이디(이메일)를 입력해주세요.
            </p>
          </div>

          <div className={styles.login__main__passwd}>
            <label
              htmlFor="passwd"
              className={styles.login__main__passwd__label}
            >
              <div>
                <span className={styles.login__main__passwd__icon}></span>
              </div>
              <input id="passwd" placeholder="비밀번호" type="password"></input>
              <span className={styles.login__main__passwd__hide}></span>
            </label>
            {/* <p>비밀번호를 입력해주세요.</p> */}
          </div>

          <div className={styles.login__main__util}>
            <div className={styles.login__main__util__auto}>
              <input id="checkbox" type="checkbox"></input>
              <label htmlFor="checkbox">자동로그인</label>
            </div>
            <div className={styles.login__main__util__find}>
              <Link to="auth">
                <p>아이디(이메일)/비밀번호 찾기</p>
                <span></span>
              </Link>
            </div>
          </div>

          <div className={styles.login__main__btn}>
            <button className={styles.login__main__btn__login}>로그인</button>
            <hr className={styles.line} />
            <Link to="/auth" state={{ isLogin: false }}>
              <button className={styles.login__main__btn__join}>
                회원가입
              </button>
            </Link>
          </div>
        </form>
      </main>
    </Fragment>
  );
};

export default LoginForm;

import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [focus, setFocus] = useState(false);
  const [blur, setBlur] = useState(false);

  const focusHandler = () => {
    setFocus((prev) => (prev = true));
    setBlur((prev) => (prev = false));
  };
  const blurHandler = () => {
    setFocus((prev) => (prev = false));
    setBlur((prev) => (prev = true));
  };

  console.log("focus", focus, "blur", blur);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submit");
  };

  return (
    <Fragment>
      <main className={styles.login__main}>
        <form onSubmit={submitHandler}>
          <div className={styles.login__main__id}>
            <label
              htmlFor="id"
              className={styles.login__main__id__label}
              onFocus={focusHandler}
              onBlur={blurHandler}
            >
              <div>
                <span className={styles.login__main__id__icon}></span>
              </div>
              <input id="id" placeholder="아이디(이메일)" type="text"></input>
            </label>
            {/* <p>아이디(이메일)를 입력해주세요.</p> */}
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

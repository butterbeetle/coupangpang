import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const touchedHandler = (event) => {
    const { name } = event.target;
    setTouched({ ...touched, [name]: true });
  };
  const blurHandler = (event) => {
    const { name } = event.target;
    setTouched({ ...touched, [name]: false });
  };

  useEffect(() => {
    if (errors.email) {
      setEmailColor(styles["invalid"]);
    } else {
      setEmailColor(touched.email ? styles["valid"] : "");
    }

    if (errors.password) {
      setPasswordColor(styles["invalid"]);
    } else {
      setPasswordColor(touched.password ? styles["valid"] : "");
    }
  }, [touched, errors.email, errors.password]);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [visibleText, setVisibleText] = useState("visible");

  const passwordVisibleHandler = () => {
    setVisibleText(passwordVisible ? "visible" : "invisible");
    setPasswordVisible((prevState) => !prevState);
  };

  const onSubmit = (data) => {
    console.log("onSubmit", data);
  };
  const onError = (error) => {
    console.log("onError", error);
  };
  // console.log("formState", formState);
  // console.log("register", register("email"));
  // console.log(`errors(${Object.keys(errors).length}) : ${errors}`);
  // console.log(passwordVisible);
  return (
    <Fragment>
      <header className={styles.login__header}>
        <Link to="/">
          <span className={styles.login__header__logo}> </span>
        </Link>
      </header>
      <main className={styles["login"]}>
        <form
          className={styles["login__form"]}
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div>
            <div className={styles["login__form--main"]}>
              <label
                htmlFor="email"
                className={`${styles["login__form--label"]} ${emailColor}`}
                onFocus={touchedHandler}
                onBlur={blurHandler}
              >
                <div>
                  <span className={styles["login__form--id--icon"]}></span>
                </div>
                <input
                  {...register("email", {
                    required: "아이디(이메일)를 입력해주세요.",
                    pattern: {
                      value:
                        /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                      message: "아이디(이메일)는 이메일 형식으로 입력해주세요.",
                    },
                  })}
                  type="text"
                  name="email"
                  placeholder="아이디(이메일)"
                ></input>
              </label>
            </div>
            {errors.email && (
              <p className={styles["login__form--error"]}>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className={styles["login__form--main"]}>
              <label
                htmlFor="password"
                className={`${styles["login__form--label"]} ${passwordColor}`}
                onFocus={touchedHandler}
                onBlur={blurHandler}
              >
                <div>
                  <span className={styles["login__form--passwd--icon"]}></span>
                </div>
                <input
                  {...register("password", {
                    required: "비밀번호를 입력해주세요",
                  })}
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="비밀번호"
                ></input>
                <span
                  onClick={passwordVisibleHandler}
                  name="visible"
                  className={
                    styles[`login__form--passwd--icon--${visibleText}`]
                  }
                ></span>
              </label>
            </div>
            {errors.password && (
              <p className={styles["login__form--error"]}>
                {errors.password.message}
              </p>
            )}
          </div>

          <div className={styles.login__main__util}>
            <div className={styles.login__main__util__auto}>
              <input id="checkbox" type="checkbox"></input>
              <label htmlFor="checkbox">자동로그인</label>
            </div>
            <div className={styles.login__main__util__find}>
              <Link to="/">
                <p>아이디(이메일)/비밀번호 찾기</p>
                <span></span>
              </Link>
            </div>
          </div>

          <div className={styles.login__main__btn}>
            <button className={styles.login__main__btn__login}>로그인</button>
            <hr className={styles.line} />
            <Link to="/join" state={{ isLogin: false }}>
              <button className={styles.login__main__btn__join}>
                회원가입
              </button>
            </Link>
          </div>
        </form>
      </main>

      <footer className={styles.login__footer}>
        <div>
          <p>©Coupang Corp. All rights reserved</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default LoginForm;

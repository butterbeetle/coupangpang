import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { loggedActions } from "../../store";

const LoginForm = () => {
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [submitError, setSubmitError] = useState("");
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
    const { id } = event.target;
    setTouched({ ...touched, [id]: true });
  };
  const blurHandler = (event) => {
    const { id } = event.target;
    setTouched({ ...touched, [id]: false });
    setSubmitError(null);
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

  const [autoLogin, setAutoLogin] = useState(false);
  const autoLoginClickHandler = () => {
    setAutoLogin((prevState) => !prevState);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    console.log("onSubmit", data, data.email, data.password);
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCnzUriRYYCPwUKN4YWiZsHDHKI-5TKBWk";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.error.message);
      }

      dispatch(loggedActions.login());

      navigate("/");
    } catch (error) {
      console.log("Error:", error.message);
      setSubmitError(
        "????????? ?????? ??????????????? ?????? ???????????????. ????????? ???????????? ?????? ??????????????????, ????????? ?????? ??????????????? ?????? ?????????????????????."
      );
    }
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
                    required: "?????????(?????????)??? ??????????????????.",
                    pattern: {
                      value:
                        /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                      message: "?????????(?????????)??? ????????? ???????????? ??????????????????.",
                    },
                  })}
                  type="text"
                  id="email"
                  placeholder="?????????(?????????)"
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
                    required: "??????????????? ??????????????????",
                  })}
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  placeholder="????????????"
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
            {(errors.password || submitError) && (
              <p className={styles["login__form--error"]}>
                {errors.password ? errors.password.message : submitError}
              </p>
            )}
          </div>

          <div>
            <div className={styles.login__main__util}>
              <div className={styles.login__main__util__auto}>
                <motion.i
                  onClick={autoLoginClickHandler}
                  animate={{
                    opacity: autoLogin ? 1 : 0,
                    y: autoLogin ? -20 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                ></motion.i>
                <input
                  onClick={autoLoginClickHandler}
                  id="autoLogin"
                  type="checkbox"
                ></input>
                <label htmlFor="autoLogin">????????? ?????? ??????</label>
              </div>
              <div className={styles.login__main__util__find}>
                <Link to="/">
                  <p>?????????(?????????)/???????????? ??????</p>
                  <span></span>
                </Link>
              </div>
            </div>
            {autoLogin && (
              <div className={styles["login__main__util__auto--box"]}>
                <i></i>
                <span>
                  ?????? ?????? ????????? ?????? ?????? ??????????????? ????????? ?????????.
                </span>
              </div>
            )}
          </div>

          <div className={styles.login__main__btn}>
            <button className={styles.login__main__btn__login}>?????????</button>
            <hr className={styles.line} />
            <Link to="/join" state={{ isLogin: false }}>
              <button className={styles.login__main__btn__join}>
                ????????????
              </button>
            </Link>
          </div>
        </form>
      </main>

      <footer className={styles.login__footer}>
        <div>
          <p>??Coupang Corp. All rights reserved</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default LoginForm;

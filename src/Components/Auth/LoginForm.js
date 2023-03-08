import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { loggedActions } from "../../store/login-slice";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firestore } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";

import { useCookies } from "react-cookie";
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

  const [cookies, setCookie, removeCookie] = useCookies();
  const onSubmit = (data) => {
    // console.log("onSubmit", data, data.email, data.password);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const token = userCredential._tokenResponse;
        const docRef = doc(firestore, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          // console.log(
          //   "Document data:",
          //   docSnap.data(),
          //   "UID:",
          //   user.uid,
          //   "Token:",
          //   token
          // );
          // console.log(token.expiresIn, token.refreshToken, token.idToken);
          const today = new Date();
          const expires = new Date(today.setDate(today.getDate() + 14));
          setCookie("token", token.refreshToken, {
            path: "/",
            expires: expires,
          });
          setCookie("uid", user.uid, {
            path: "/",
            expires: expires,
          });
          sessionStorage.setItem("token", token.idToken);
          sessionStorage.setItem("expires", token.expiresIn);
          dispatch(
            loggedActions.register({
              email: docSnap.data().email,
              name: docSnap.data().name,
              phone: docSnap.data().phone,
            })
          );
          dispatch(loggedActions.login());
          navigate("/");
        } else {
          throw new Error();
        }
      })
      .catch((e) => {
        console.log(e);
        setSubmitError(
          "이메일 또는 비밀번호를 다시 확인하세요. 쿠팡에 등록되지 않은 이메일이거나, 이메일 또는 비밀번호를 잘못 입력하셨습니다."
        );
      });
  };

  const onError = (error) => {
    // console.log("onError", error);
  };

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
                  id="email"
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
                  id="password"
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
                <label htmlFor="autoLogin">로그인 상태 유지</label>
              </div>
              <div className={styles.login__main__util__find}>
                <Link to="/">
                  <p>아이디(이메일)/비밀번호 찾기</p>
                  <span></span>
                </Link>
              </div>
            </div>
            {autoLogin && (
              <div className={styles["login__main__util__auto--box"]}>
                <i></i>
                <span>
                  개인 정보 보호를 위해 본인 기기에서만 이용해 주세요.
                </span>
              </div>
            )}
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

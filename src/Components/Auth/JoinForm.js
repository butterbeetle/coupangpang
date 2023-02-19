import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./JoinForm.module.css";
import Terms from "./Terms";
import * as yup from "yup";
import useInput from "../../hooks/useInput";
import {
  getAuth,
  createUserWithEmailAndPassword,
  // fetchSignInMethodsForEmail,
} from "firebase/auth";

const isContiguous = (str = "", limit = 3) => {
  if (!str.trim()) return false;
  const unicodeStr = [...str].map((char) => char.charCodeAt());

  let preStr = 0;
  let cnt = 0;
  let result = 0;

  unicodeStr.forEach((code, index) => {
    if (index > 0) {
      if (result >= -1 && result <= 1 && preStr - code === result) {
        cnt++;
      }
    }
    result = preStr - code;
    preStr = code;
  });

  return cnt >= limit - 2;
};

const JoinForm = () => {
  const {
    click: emailClick,
    touched: emailTouched,
    clickHandler: emailClickHandler,
    blurHandler: emailBlurHandler,
  } = useInput();
  const {
    click: passwordClick,
    touched: passwordTouched,
    clickHandler: passwordClickHandler,
    blurHandler: passwordBlurHandler,
  } = useInput();
  const {
    click: passwordConfirmClick,
    touched: passwordConfirmTouched,
    clickHandler: passwordConfirmClickHandler,
    blurHandler: passwordConfirmBlurHandler,
  } = useInput();
  const {
    click: nameClick,
    touched: nameTouched,
    clickHandler: nameClickHandler,
    blurHandler: nameBlurHandler,
  } = useInput();
  const {
    click: phoneClick,
    touched: phoneTouched,
    clickHandler: phoneClickHandler,
    blurHandler: phoneBlurHandler,
  } = useInput();

  const formSchema = yup.object({
    email: yup
      .string()
      .required("이메일을 입력하세요.")
      .matches(
        //eslint-disable-next-line
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
        "이메일을 올바르게 입력해주세요."
      ),
    // .test(
    //   "emailCheck",
    //   "이미 가입된 이메일 주소입니다. 다른 이메일을 입력하여 주세요.",
    //   async (values) => {
    //     if (values) {
    //       try {
    //         const auth = getAuth();
    //         const res = await fetchSignInMethodsForEmail(auth, values);
    //         return res[0] ? false : true;
    //       } catch (error) {
    //         //NOTHING
    //       }
    //     }
    //   }
    // ),
    password: yup
      .string()
      .required()
      .min(8)
      .max(20)
      .matches(
        /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/,
        "영문/숫자/특수문자 2가지 이상 조합 (8~20자)"
      )
      .test(
        "contiguous",
        "3개 이상 연속되거나 동일한 문자/숫자 제외",
        (value) => {
          return !isContiguous(value, 3);
        }
      ),
    passwordConfirm: yup
      .string()
      .required("확인을 위해 새 비밀번호를 다시 입력해주세요.")
      .oneOf([yup.ref("password"), null], "새 비밀번호가 일치하지 않습니다."),
    name: yup.string().required("이름을 정확히 입력하세요."),
    phone: yup
      .string()
      .required("휴대폰 번호를 정확하게 입력하세요.")
      .matches(
        /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
        "휴대폰 번호를 정확하게 입력하세요."
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    reValidateMode: "all",
    mode: "all",
    resolver: yupResolver(formSchema, { abortEarly: false }),
  });

  const emailBottom = errors.email
    ? `${styles["invalid"]}`
    : emailClick
    ? `${styles["focus"]}`
    : "";
  const passwordBottom = errors.password
    ? `${styles["invalid"]}`
    : passwordClick
    ? `${styles["focus"]}`
    : "";
  const passwordConfirmBottom = errors.passwordConfirm
    ? `${styles["invalid"]}`
    : passwordConfirmClick
    ? `${styles["focus"]}`
    : "";
  const nameBottom = errors.name
    ? `${styles["invalid"]}`
    : nameClick
    ? `${styles["focus"]}`
    : "";
  const phoneBottom = errors.phone
    ? `${styles["invalid"]}`
    : phoneClick
    ? `${styles["focus"]}`
    : "";

  const navigate = useNavigate();
  const [submitTouched, setSubmitTouched] = useState(false);
  const [termsError, setTermsError] = useState(true);

  const submitHandler = () => {
    if (!submitTouched) {
      setSubmitTouched(true);
    }
  };
  const onSubmit = async (data) => {
    if (termsError) {
      return;
    }
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate("/login");
    } catch (error) {
      console.log(data.email, error.code);
    }
  };

  return (
    <Fragment>
      <header className={styles["header"]}>
        <Link to="/">
          <span className={styles["logo"]}> </span>
        </Link>
      </header>
      <main>
        <section className={styles["join"]}>
          <p className={styles["join-text"]}>회원정보를 입력해주세요</p>
          <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
            <div
              onClick={emailClickHandler}
              onBlur={emailBlurHandler}
              className={`${styles["form__content"]} ${emailBottom}`}
            >
              <label htmlFor="email" className={styles["form__label"]}>
                <div>
                  <span className={styles["icon--email"]}></span>
                </div>
                <input
                  name="email"
                  placeholder="아이디(이메일)"
                  {...register("email")}
                ></input>
                {!errors.email && !emailClick && emailTouched && (
                  <span className={styles["icon--check"]}></span>
                )}
              </label>
            </div>
            {errors.email && (
              <p className={styles["error-text"]}>{errors.email.message}</p>
            )}

            <div
              onClick={passwordClickHandler}
              onBlur={passwordBlurHandler}
              className={`${styles["form__content"]} ${passwordBottom}`}
            >
              <label htmlFor="passwd" className={`${styles["form__label"]}`}>
                <div>
                  <span className={styles["icon--passwd"]}></span>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  {...register("password")}
                ></input>
                {!errors.password && !passwordClick && passwordTouched && (
                  <span className={styles["icon--check"]}></span>
                )}
              </label>
            </div>
            {errors.password
              ? Object.entries(errors.password.types).map(
                  ([type, message]) =>
                    (type === "matches" || type === "contiguous") && (
                      <div key={type} className={styles["error-box"]}>
                        <span className={styles[`red-icon`]} />
                        <p className={styles["error-text"]}>{message}</p>
                      </div>
                    )
                )
              : passwordTouched && (
                  <div className={styles["error-box"]}>
                    <span className={styles[`green-icon`]} />
                    <p className={styles["green-text"]}>
                      사용 가능한 비밀번호입니다.
                    </p>
                  </div>
                )}

            <div
              onClick={passwordConfirmClickHandler}
              onBlur={passwordConfirmBlurHandler}
              className={`${styles["form__content"]} ${passwordConfirmBottom}`}
            >
              <label
                htmlFor="passwd-confirm"
                className={`${styles["form__label"]}`}
              >
                <div>
                  <span className={styles["icon--passwd--confirm"]}></span>
                </div>
                <input
                  type="password"
                  name="passwd-confirm"
                  placeholder="비밀번호 확인"
                  {...register("passwordConfirm")}
                ></input>
                {!errors.passwordConfirm &&
                  !passwordConfirmClick &&
                  passwordConfirmTouched && (
                    <span className={styles["icon--check"]}></span>
                  )}
              </label>
            </div>

            {errors.passwordConfirm ? (
              <div className={styles["error-box"]}>
                <span className={styles[`red-icon`]} />
                <p className={styles["error-text"]}>
                  {errors.passwordConfirm.message}
                </p>
              </div>
            ) : (
              passwordConfirmTouched && (
                <div className={styles["error-box"]}>
                  <span className={styles[`green-icon`]} />
                  <p className={styles["green-text"]}>
                    새 비밀번호가 일치합니다.
                  </p>
                </div>
              )
            )}

            <div
              onClick={nameClickHandler}
              onBlur={nameBlurHandler}
              className={`${styles["form__content"]} ${nameBottom}`}
            >
              <label htmlFor="name" className={`${styles["form__label"]}`}>
                <div>
                  <span className={styles["icon--name"]}></span>
                </div>
                <input
                  id="name"
                  placeholder="이름"
                  type="text"
                  {...register("name")}
                ></input>
                {!errors.name && !nameClick && nameTouched && (
                  <span className={styles["icon--check"]}></span>
                )}
              </label>
            </div>
            {errors.name && (
              <p className={styles["error-text"]}>{errors.name.message}</p>
            )}

            <div
              onClick={phoneClickHandler}
              onBlur={phoneBlurHandler}
              className={`${styles["form__content"]} ${phoneBottom}`}
            >
              <label htmlFor="phone" className={`${styles["form__label"]}`}>
                <div>
                  <span className={styles["icon--phone"]}></span>
                </div>
                <input
                  id="phone"
                  placeholder="휴대폰 번호"
                  type="tel"
                  {...register("phone")}
                ></input>
                {!errors.phone && !phoneClick && phoneTouched && (
                  <span className={styles["icon--check"]}></span>
                )}
              </label>
            </div>
            {errors.phone && (
              <p className={styles["error-text"]}>{errors.phone.message}</p>
            )}

            <Terms
              submitTouched={submitTouched}
              setTermsError={setTermsError}
              termsError={termsError}
            />
            <button onClick={submitHandler} className={styles["button"]}>
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

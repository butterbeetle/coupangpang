import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import JoinForm from "./JoinForm";
import styles from "./AuthForm.module.css";

const AuthForm = () => {
  const { state } = useLocation();
  // console.log(state);
  const [isLogin, setIsLogin] = useState(state.isLogin);

  useEffect(() => {
    setIsLogin((prev) => (prev = state.isLogin));
  }, [state]);

  return (
    <Fragment>
      <header className={styles.login__header}>
        <Link to="/">
          <span className={styles.login__header__logo}> </span>
        </Link>
      </header>
      {isLogin ? <LoginForm /> : <JoinForm />}
      <footer className={styles.login__footer}>
        <div>
          <p>©Coupang Corp. All rights reserved</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default AuthForm;

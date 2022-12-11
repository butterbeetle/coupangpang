import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

import { useDispatch, useSelector } from "react-redux";
import { Fragment, useState } from "react";
import { loggedActions } from "../store";

const Navigation = () => {
  const [isHover, setIsHover] = useState(false);

  const hoverHandler = () => {
    setIsHover((prevState) => !prevState);
  };

  let hoverSubMenu = isHover && (
    <Fragment>
      <hovermenu className={styles["hovermenu"]}>
        <ul className={styles["hovermenu__ul"]}>
          <li>오픈마켓</li>
          <li>여행·티켓</li>
          <li>로켓배송</li>
          <li>제휴마케팅</li>
        </ul>
      </hovermenu>
    </Fragment>
  );

  const dispatch = useDispatch();
  const userName = useSelector((state) => state.logged.name);
  const userEmail = useSelector((state) => state.logged.email);
  const userPhone = useSelector((state) => state.logged.phone);

  const isLogged = useSelector((state) => state.logged.isLogged);

  // console.log(userName, userEmail, userPhone, isLogged);
  console.log(isHover);
  const logoutHandler = () => {
    dispatch(loggedActions.logout());
  };

  let topbarMenu = isLogged ? (
    <Fragment>
      <li>
        <Link to="/">
          <strong>{userName}</strong>님
        </Link>
      </li>
      <li>
        <Link className={styles["logout"]} onClick={logoutHandler}>
          로그아웃
        </Link>
      </li>
    </Fragment>
  ) : (
    <Fragment>
      <li>
        <Link to="login">로그인</Link>
      </li>
      <li>
        <Link to="join">회원가입</Link>
      </li>
    </Fragment>
  );
  return (
    <section className={styles.topBar}>
      <div className={styles.topBar__main}>
        <nav className={styles["topbar__nav"]}>
          <ul className={styles["topbar__nav--ul"]}>
            <li>즐겨찾기</li>
            <li onMouseOver={hoverHandler} onMouseOut={hoverHandler}>
              <span>입점신청</span>
              <i className={styles.icon}></i>
              {hoverSubMenu}
            </li>
          </ul>
          <ul className={styles["topbar__nav--ul"]}>
            {topbarMenu}
            <li>고객센터</li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;

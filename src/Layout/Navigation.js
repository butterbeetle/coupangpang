import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

import { useDispatch, useSelector } from "react-redux";
import { Fragment, useState } from "react";
import { loggedActions } from "../store/login-slice";

const Navigation = () => {
  const [isLeftHover, setIsLeftHover] = useState(false);
  const [isRightHover, setIsRightHover] = useState(false);

  const leftHoverHandler = () => {
    setIsLeftHover((prevState) => !prevState);
  };

  const rightHoverHandler = () => {
    setIsRightHover((prevState) => !prevState);
  };

  let leftHoverSubMenu = isLeftHover && (
    <Fragment>
      <div className={styles["hovermenu__left"]}>
        <ul className={styles["hovermenu--ul"]}>
          <li>오픈마켓</li>
          <li>여행·티켓</li>
          <li>로켓배송</li>
          <li>제휴마케팅</li>
        </ul>
      </div>
    </Fragment>
  );

  let rightHoverSubMenu = isRightHover && (
    <Fragment>
      <div className={styles["hovermenu__right"]}>
        <ul className={styles["hovermenu--ul"]}>
          <li>자주묻는 질문 </li>
          <li>1:1 채팅문의</li>
          <li>고객의 소리</li>
          <li>취소 / 반품 안내</li>
        </ul>
      </div>
    </Fragment>
  );
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.logged.name);
  const isLogged = useSelector((state) => state.logged.isLogged);

  // console.log("Navi", userName, isLogged);

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
        <Link to="/login">로그인</Link>
      </li>
      <li>
        <Link to="/join">회원가입</Link>
      </li>
    </Fragment>
  );
  return (
    <section className={styles.topBar}>
      <div className={styles.topBar__main}>
        <nav className={styles["topbar__nav"]}>
          <ul className={styles["topbar__nav--ul"]}>
            <li>즐겨찾기</li>
            <li onMouseOver={leftHoverHandler} onMouseOut={leftHoverHandler}>
              <span>입점신청</span>
              <i className={styles.icon}></i>
              {leftHoverSubMenu}
            </li>
          </ul>
          <ul className={styles["topbar__nav--ul"]}>
            {topbarMenu}
            <li onMouseOver={rightHoverHandler} onMouseOut={rightHoverHandler}>
              <span>고객센터</span>
              {rightHoverSubMenu}
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;

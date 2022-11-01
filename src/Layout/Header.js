import { Fragment } from "react";
import classes from "./Header.module.css";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <Fragment>
      <Navigation />
      <section style={{ backgroundColor: "white" }}>
        <header className={classes.header}>
          <div className={classes.categoryBtn}>
            <FontAwesomeIcon icon={faBars} size="2x" />
            <span>카테고리</span>
          </div>
          <div className={classes.searchBox}>
            <div className={classes.searchBar}>
              <h1>COUPANGPANG</h1>
              <div>
                <input />
                <button>돋보기</button>
              </div>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faUser} size="2x" />
                  <span>마이쿠팡</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                  <span>장바구니</span>
                </li>
              </ul>
            </div>
            <div className={classes.searchMenu}>
              <ul>
                <li>로켓배송</li>
                <li>로켓프레시</li>
                <li>biz쿠팡비즈</li>
                <li>로켓직구</li>
                <li>골드박스</li>
                <li>와우회원할인</li>
                <li>이벤트/쿠폰</li>
                <li>착한상점</li>
                <li>기획전</li>
                <li>여행/티켓</li>
              </ul>
            </div>
          </div>
        </header>
      </section>
    </Fragment>
  );
};

export default Header;

import { Fragment } from "react";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
//Icon
import search_mic from "../img/search_mic.png";
import my_coupang from "../img/my_coupang.png";
import cart from "../img/cart.png";
import icon_new from "../img/ico_new.png";
import rocket_fresh from "../img/rocket_fresh.png";
import rocket_delivery from "../img/rocket_delivery.png";
import icon_government_promotion from "../img/icon_government_promotion.png";
import icon_travel from "../img/icon_travel.png";
import logoBizonlyBrown from "../img/logoBizonlyBrown.png";
import Overseas from "../img/Overseas.png";

const Header = () => {
  return (
    <Fragment>
      <Navigation />
      <header style={{ backgroundColor: "white" }}>
        <section className={styles.header}>
          <div className={styles.category}>
            <a href="/">카테고리</a>
          </div>
          <div className={styles.searchBox}>
            <div className={styles.searchBox__mainBox}>
              <a href="/" title="Coupang - 내가 잘사는 이유">
                <i className={styles.searchBox__mainBox__logo}></i>
              </a>
              <div className={styles.searchBox__mainBox__bar}>
                <div className={styles.searchBox__mainBox__bar__category}>
                  <p>전체</p>
                  <i className={styles.icon}></i>
                </div>
                <form className={styles.searchBox__mainBox__bar__form}>
                  <input placeholder="찾고 싶은 상품을 검색해보세요!" />
                  <img src={search_mic} alt="마이크" />
                  <button alt="검색" />
                </form>
              </div>
              <ul className={styles.userInfo}>
                <li>
                  <img src={my_coupang} alt="내 정보" />
                  <a href="/">마이쿠팡</a>
                </li>
                <li>
                  <img src={cart} alt="장바구니" />
                  <a href="/">장바구니</a>
                </li>
              </ul>
            </div>
            <ul className={styles.gnbMenu}>
              <li>
                <img src={rocket_delivery} alt="로켓배송" />
                <a href="/">로켓배송</a>
              </li>
              <li>
                <img src={rocket_fresh} alt="로켓프레시" />
                <a href="/">로켓프레시</a>
                <img className={styles.newIcon} src={icon_new} alt="new" />
              </li>
              <li>
                <img src={logoBizonlyBrown} alt="biz" />
                <a href="/">쿠팡비즈</a>
                <img className={styles.newIcon} src={icon_new} alt="new" />
              </li>
              <li>
                <img src={Overseas} alt="로켓직구" />
                <a href="/">로켓직구</a>
              </li>
              <li>
                <a href="/">골드박스</a>
              </li>
              <li>
                <a href="/">와우회원할인</a>
              </li>
              <li>
                <a href="/">이벤트/쿠폰</a>
              </li>
              <li>
                <img
                  className={styles.newIcon}
                  src={icon_government_promotion}
                  alt="착한상점"
                />
                <span>착한상점</span>
                <img className={styles.newIcon} src={icon_new} alt="new" />
              </li>
              <li>
                <span>기획전</span>
              </li>
              <li>
                <img src={icon_travel} alt="여행" />
                <span>여행/티켓</span>
                <img className={styles.newIcon} src={icon_new} alt="new" />
              </li>
            </ul>
          </div>
        </section>
      </header>
    </Fragment>
  );
};

export default Header;

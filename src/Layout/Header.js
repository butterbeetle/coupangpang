import { Fragment } from "react";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
//Icon
import icon_new from "../img/ico_new.png";

const Header = () => {
  return (
    <Fragment>
      <Navigation />
      <header style={{ backgroundColor: "white" }}>
        <section className={styles.header}>
          <div className={styles.category}>
            <p>카테고리</p>
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
                  <span></span>
                  <button alt="검색" />
                </form>
              </div>
              <ul className={styles.searchBox__mainBox__user}>
                <li>
                  <div className={styles.searchBox__mainBox__user__info}>
                    <p>마이쿠팡</p>
                  </div>
                </li>
                <li>
                  <div className={styles.searchBox__mainBox__user__cart}>
                    <p>장바구니</p>
                  </div>
                </li>
              </ul>
              <p className={styles.searchBox__mainBox__user__cart__counter}>
                0
              </p>
            </div>
            <ul className={styles.searchBox__gnbMenu}>
              <li className={styles.searchBox__gnbMenu__delivery}>
                <a href="/">로켓배송</a>
              </li>
              <li className={styles.searchBox__gnbMenu__fresh}>
                <a href="/">
                  로켓프레시
                  <img className={styles.newIcon} src={icon_new} alt="new" />
                </a>
              </li>
              <li className={styles.searchBox__gnbMenu__biz}>
                <a href="/">
                  쿠팡비즈
                  <img className={styles.newIcon} src={icon_new} alt="new" />
                </a>
              </li>
              <li className={styles.searchBox__gnbMenu__overseas}>
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
              <li className={styles.searchBox__gnbMenu__promotion}>
                <a href="/">
                  착한상점
                  <img className={styles.newIcon} src={icon_new} alt="new" />
                </a>
              </li>
              <li>
                <a href="/">기획전</a>
              </li>
              <li className={styles.searchBox__gnbMenu__travel}>
                <a href="/">
                  여행/티켓
                  <img className={styles.newIcon} src={icon_new} alt="new" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </header>
    </Fragment>
  );
};

export default Header;

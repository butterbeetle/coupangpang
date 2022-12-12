import { Fragment } from "react";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
//Icon
import icon_new from "../img/header_img/ico_new.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <Navigation />
      <header style={{ backgroundColor: "white" }}>
        <section className={styles.header}>
          <div className={styles.category}>
            <p>카테고리</p>
            <div className={styles["category__list--first"]}>
              <ul className={styles["category__list--first--ul"]}>
                <li>
                  <i className={styles["fashion"]}></i>
                  <Link to="/">패션의류/잡화</Link>
                  <i className={styles["select"]}></i>
                </li>
                <li>
                  <i className={styles["beauty"]}></i>
                  <Link to="/">뷰티</Link>
                  <i className={styles["select"]}></i>
                </li>

                {/* <li>뷰티</li>
                <li>출산/유아동</li>
                <li>식품</li>
                <li>주방용품</li>
                <li>생활용품</li>
                <li>홈인테리어</li>
                <li>가전디지털</li>
                <li>스포츠/레저</li>
                <li>자동차용품</li>
                <li>도서/음반/DVD</li>
                <li>완구/취미</li>
                <li>문구/오피스</li>
                <li>반려동물용품</li>
                <li>헬스/건강식품</li> */}
              </ul>
              <ul className={styles["category__list--first--sub"]}>
                <li>여행/티켓</li>
                <li>테마관</li>
              </ul>
            </div>
            <div className={styles["category__list--second"]}>
              <ul>
                <li>여성패션</li>
                <li>남성패션</li>
                <li>남녀 공용 의류</li>
                <li>유아동패션</li>
              </ul>
            </div>
            <div className={styles["category__list--third"]}>
              <ul>
                <li>의류</li>
                <li>속옷/잠옷</li>
                <li>신발</li>
                <li>가방/잡화</li>
              </ul>
            </div>
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

import { Fragment, useState } from "react";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
//Icon
import icon_new from "../img/header_img/ico_new.png";
import Catrgory from "./Category";
import CategoryItems from "../Components/CategoryItems";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const searchTagItems = [
  { title: "전체" },
  { title: "여성패션" },
  { title: "남성패션" },
  { title: "남녀 공용 의류" },
  { title: "유아동패션" },
  { title: "뷰티" },
  { title: "출산/유아동" },
  { title: "식품" },
  { title: "주방용품" },
  { title: "생활용품" },
  { title: "홈인테리어" },
  { title: "가전디지털" },
  { title: "스포츠/레저" },
  { title: "자동차용품" },
  { title: "도서/음반/DVD" },
  { title: "완구/취미" },
  { title: "문구/오피스" },
  { title: "반려동물용품" },
  { title: "헬스/건강식품" },
  { title: "국내여행" },
  { title: "해외여행" },
  { title: "22 겨울 패션 스토어" },
  { title: "로켓설치" },
  { title: "공간별 집꾸미기" },
  { title: "헬스케어 전문관" },
  { title: "쿠팡 Only" },
  { title: "싱글라이프" },
  { title: "악기전문관" },
  { title: "결혼준비" },
  { title: "아트/공예" },
  { title: "홈카페" },
  { title: "실버스토어" },
];

const myCoupangItems = [
  { title: "주문목록" },
  { title: "취소/반품" },
  { title: "찜 리스트" },
];

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [myCoupangDropdown, setMyCoupangDropdown] = useState(false);

  const viewPortHeight = window.innerHeight - 100;

  const onClickHandler = () => {
    setDropdown((prevState) => !prevState);
  };
  const onMouseEnter = () => {
    setMyCoupangDropdown(true);
  };

  const onMouseLeave = () => {
    setMyCoupangDropdown(false);
  };
  const variants = {
    open: {
      display: "block",
      opacity: 1,
      height: viewPortHeight > 1030 ? 1030 : viewPortHeight,
    },
    close: {
      opacity: 1,
      height: 0,
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <Fragment>
      <Navigation />
      <header className={styles["header"]}>
        <section className={styles["contents"]}>
          <Catrgory />
          <div className={styles.searchBox}>
            <div className={styles.searchBox__mainBox}>
              <Link to="/" title="Coupang - 내가 잘사는 이유">
                <i className={styles.searchBox__mainBox__logo}></i>
              </Link>
              <div className={styles.searchBox__mainBox__bar}>
                <div
                  className={styles.searchBox__mainBox__bar__category}
                  onClick={onClickHandler}
                >
                  <p>전체</p>
                  {dropdown ? (
                    <i className={styles["icon-up"]}></i>
                  ) : (
                    <i className={styles["icon-down"]}></i>
                  )}

                  <motion.ul
                    variants={variants}
                    initial="close"
                    animate={dropdown ? "open" : "close"}
                    transition={{ type: "tween" }}
                    className={styles["menus"]}
                  >
                    {searchTagItems.map((menu, idx) => {
                      const depth = 0;
                      return (
                        <CategoryItems
                          items={menu}
                          key={idx}
                          depth={depth}
                          type={1}
                        />
                      );
                    })}
                  </motion.ul>
                </div>
                <form className={styles.searchBox__mainBox__bar__form}>
                  <input placeholder="찾고 싶은 상품을 검색해보세요!" />
                  <span></span>
                  <button alt="검색" />
                </form>
              </div>
              <ul className={styles.searchBox__mainBox__user}>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <div className={styles.searchBox__mainBox__user__info}>
                    <p>마이쿠팡</p>
                    {myCoupangDropdown && (
                      <div className={styles["myCoupang-dropdown"]}>
                        <i className={styles["speech-icon"]}></i>
                        <ul
                          className={`${styles["menus"]} ${styles["my-coupang"]}`}
                        >
                          {myCoupangItems.map((menu, idx) => {
                            const depth = 0;
                            return (
                              <CategoryItems
                                items={menu}
                                key={idx}
                                depth={depth}
                                type={1}
                              />
                            );
                          })}
                        </ul>
                      </div>
                    )}
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

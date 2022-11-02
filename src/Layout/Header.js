import { Fragment } from "react";
import classes from "./Header.module.css";
import Navigation from "./Navigation";
//Icon
import coupangpang_logo from "../img/logo_coupangpang.png";
import search_click from "../img/search_click.png";
import search_mic from "../img/search_mic.png";
import category from "../img/category.png";
import my_coupang from "../img/my_coupang.png";
import cart from "../img/cart.png";

const Header = () => {
  return (
    <Fragment>
      <Navigation />
      <section style={{ backgroundColor: "white" }}>
        <header className={classes.header}>
          <div className={classes.category}>
            <img src={category} alt="카테고리" />
            <span>카테고리</span>
          </div>
          <div className={classes.searchBox}>
            <div className={classes.searchBar}>
              <img src={coupangpang_logo} alt="로고" />
              <div className={classes.search}>
                <input />
                <button>
                  <img src={search_mic} alt="마이크" />
                </button>
                <button>
                  <img src={search_click} alt="검색" />
                </button>
              </div>
              <ul className={classes.userInfo}>
                <li>
                  <img src={my_coupang} alt="내 정보" />
                  <span>마이쿠팡</span>
                </li>
                <li>
                  <img src={cart} alt="장바구니" />
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

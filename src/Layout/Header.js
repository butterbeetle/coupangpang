import classes from "./Header.module.css";

const Header = () => {
  return (
    <section>
      <header className={classes.header}>
        <div
          style={{
            backgroundColor: "#477DEF",
            width: "115px",
            height: "115px",
            color: "white",
          }}
        >
          <p>Icon</p>
          <p>카테고리</p>
        </div>
        <div>
          <div className={classes.SearchBox}>
            <span>COUPANGPANG</span>
            <p>검색창</p>
            <ul>
              <li>마이쿠팡</li>
              <li>장바구니</li>
            </ul>
          </div>
          <div>
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
  );
};

export default Header;

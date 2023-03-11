import { Link } from "react-router-dom";
import styles from "./Error.module.css";
/* Icon */
import { AiOutlineStop, AiOutlineSearch } from "react-icons/ai";
import { GiRotaryPhone } from "react-icons/gi";

const ErrorPage = () => {
  return (
    <div className={styles["error"]}>
      <header className={styles["header"]}>
        <Link to="/">
          <span className={styles["logo"]} />
        </Link>
      </header>
      <main className={styles["main"]}>
        <div className={styles["contents"]}>
          <div className={styles["contents__header"]}>
            <AiOutlineStop className={styles["stop"]} />
            <AiOutlineSearch className={styles["search"]} />
            <h3>찾을 수 없는 페이지 입니다.</h3>
          </div>
          <div className={styles["contents__main"]}>
            <p>
              쿠팡을 찾아주신 고객님,
              <br />
              입력하신 페이지의 주소가 잘못 입력되었거나, 변경 또는 삭제되어
              요청하신
              <br /> 페이지를 찾을 수 없습니다.
              <br /> 입력하신 주소가 정확한지 다시 한번 확인해주시기 바랍니다.
              <br /> (이벤트 페이지의 경우 이벤트 종류 후 페이지가 삭제될 수
              있습니다.)
            </p>
            <div className={styles["call"]}>
              <GiRotaryPhone className={styles["call__img"]} />
              고객센터 TEL. 1577-7011 (운영시간 : 연중무휴 오전 9시 ~ 오후 7시)
            </div>
            <div className={styles["btn"]}>
              <Link className={styles["btn__back"]} to=".." relative="path">
                이전 페이지로
              </Link>
              <Link className={styles["btn__home"]} to="/">
                쿠팡 홈으로
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles["footer"]}>
        © Forward Ventures Co.,Ltd. All rights reserved.
      </footer>
    </div>
  );
};
export default ErrorPage;

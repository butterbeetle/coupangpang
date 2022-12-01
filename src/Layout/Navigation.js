import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <section className={styles.topBar}>
      <div className={styles.topBar__main}>
        <nav>
          <ul>
            <li>즐겨찾기</li>
            <li>
              <span>입점신청</span>
              <i className={styles.icon}></i>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="login" state={{ isLogin: true }}>
                로그인
              </Link>
            </li>
            <li>
              <Link to="join" state={{ isLogin: false }}>
                회원가입
              </Link>
            </li>
            <li>고객센터</li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;

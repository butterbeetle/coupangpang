import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <section className={styles.topBar}>
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
            <Link to="login">로그인</Link>
          </li>
          <li>회원가입</li>
          <li>고객센터</li>
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;

import classes from "./Navigation.module.css";

// for FontAwesome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <article className={classes.article}>
      <nav>
        <ul>
          <li>즐겨찾기</li>
          <li>
            <span>입점신청</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </li>
        </ul>

        <ul>
          <li>로그인</li>
          <li>회원가입</li>
          <li>고객센터</li>
        </ul>
      </nav>
    </article>
  );
};

export default Navigation;

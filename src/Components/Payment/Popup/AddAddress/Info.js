import styles from "./Info.module.css";
/* Icon */
import { BsChatLeftDots } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";

const Info = ({ onClickNor, onClickDawn }) => {
  return (
    <div className={styles["input__box"]}>
      <div className={styles["icon__box"]}>
        <BsChatLeftDots />
      </div>
      <div className={styles["info__box"]}>
        <div className={styles["info__normal"]} onClick={onClickNor}>
          <p>일반배송 정보를 선택해 주세요.</p>
          <RiArrowRightSLine />
        </div>
        <div className={styles["info__dawn"]} onClick={onClickDawn}>
          <p>새벽배송 정보를 선택해 주세요.</p>
          <RiArrowRightSLine />
        </div>
      </div>
    </div>
  );
};

export default Info;

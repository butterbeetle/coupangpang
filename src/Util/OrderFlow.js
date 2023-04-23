import styles from "./OrderFlow.module.css";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";

const OrderFlow = ({ step }) => {
  return (
    <ul className={styles["flow"]}>
      <li
        className={`${styles["step"]} ${
          step === 1 ? styles["step__here"] : null
        }`}
      >
        <p className={styles["step__num"]}>01</p>
        <p className={styles["step__title"]}>옵션선택</p>
        <AiOutlineRight />
      </li>
      <li
        className={`${styles["step"]} ${
          step === 2 ? styles["step__here"] : null
        }`}
      >
        <p className={styles["step__num"]}>02</p>
        <p className={styles["step__title"]}>장바구니</p>
        <AiOutlineRight />
      </li>
      <li
        className={`${styles["step"]} ${
          step === 3 ? styles["step__here"] : null
        }`}
      >
        <p className={styles["step__num"]}>03</p>
        <p className={styles["step__title"]}>주문/결제</p>
        <AiOutlineRight />
      </li>
      <li
        className={`${styles["step"]} ${
          step === 4 ? styles["step__here"] : null
        }`}
      >
        <p className={styles["step__num"]}>04</p>
        <p className={styles["step__title"]}>주문완료</p>
      </li>
    </ul>
  );
};
export default OrderFlow;

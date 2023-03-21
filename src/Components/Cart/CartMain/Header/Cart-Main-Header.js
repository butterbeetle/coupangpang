import styles from "./Cart-Main-Header.module.css";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

const CartMainHeader = () => {
  return (
    <header className={styles["contents__header"]}>
      <BsCart4 className={styles["contents__header-icon"]} />
      <h1>장바구니</h1>
      <ul>
        <li className={styles["step"]}>
          <p className={styles["step__num"]}>01</p>
          <p className={styles["step__title"]}>옵션선택</p>
          <AiOutlineRight />
        </li>
        <li className={`${styles["step"]} ${styles["step__here"]}`}>
          <p className={styles["step__num"]}>02</p>
          <p className={styles["step__title"]}>장바구니</p>
          <AiOutlineRight />
        </li>
        <li className={styles["step"]}>
          <p className={styles["step__num"]}>03</p>
          <p className={styles["step__title"]}>주문/결제</p>
          <AiOutlineRight />
        </li>
        <li className={styles["step"]}>
          <p className={styles["step__num"]}>04</p>
          <p className={styles["step__title"]}>주문완료</p>
        </li>
      </ul>
    </header>
  );
};
export default CartMainHeader;

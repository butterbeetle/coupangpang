import styles from "./CartTotal.module.css";
/* Icon */
import { AiOutlinePlusSquare } from "react-icons/ai";
import { MdPausePresentation } from "react-icons/md";
const CartTotal = () => {
  return (
    <div className={styles["total"]}>
      <div className={styles["total__container"]}>
        총 상품가격
        <span className={styles["total__price"]}>0</span>원
        <AiOutlinePlusSquare className={styles["plus-square"]} />총 배송비
        <span className={styles["total__price"]}>0</span>원
        <MdPausePresentation className={styles["equal-square"]} />총 주문금액
        <span
          className={`${styles["total__price"]} ${styles["total__price__final"]}`}
        >
          0원
        </span>
      </div>
    </div>
  );
};

export default CartTotal;

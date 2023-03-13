import styles from "./CartCash.module.css";
/* Icon */
import { FaCopyright } from "react-icons/fa";
const CartCash = () => {
  return (
    <div className={styles["cash"]}>
      <div className={styles["coin__circle"]}>
        <FaCopyright />
      </div>
      <h3>캐시적립 혜택</h3>
      <span>쿠페이 머니 결제 시 1% 적립</span>
    </div>
  );
};

export default CartCash;

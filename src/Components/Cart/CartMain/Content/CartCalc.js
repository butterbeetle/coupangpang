import styles from "./CartCalc.module.css";
import { MdAddCircle, MdPauseCircle } from "react-icons/md";
const CartCalc = () => {
  return (
    <div className={styles["calc"]}>
      <span>상품가격</span>
      <span className={styles["calc__price"]}>58,700</span>원
      <MdAddCircle className={styles["plus"]} />
      <span>배송비</span>
      <span className={styles["calc__delivary"]}>0</span>원
      <MdPauseCircle className={styles["equal"]} />
      <span>주문금액</span>
      <span className={styles["calc__total"]}>58,710</span>원
    </div>
  );
};

export default CartCalc;

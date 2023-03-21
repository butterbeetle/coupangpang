import styles from "./CartCalc.module.css";
import { MdAddCircle, MdPauseCircle } from "react-icons/md";
import { useSelector } from "react-redux";
const CartCalc = () => {
  /* 장바구니에 있는 Item 정보 */
  const cartItems = useSelector((state) => state.cart.items);
  /* 장바구니 check 정보 */
  const checked = useSelector((state) => state.cart.checked);

  const totalPrice = cartItems.reduce((acc, { id, totalPrice }) => {
    if (checked.includes(id)) {
      acc += totalPrice;
    }
    return acc;
  }, 0);

  return (
    <div className={styles["calc"]}>
      <span>상품가격</span>
      <span className={styles["calc__price"]}>
        {totalPrice.toLocaleString()}
      </span>
      원
      <MdAddCircle className={styles["plus"]} />
      <span>배송비</span>
      <span className={styles["calc__delivary"]}>0</span>원
      <MdPauseCircle className={styles["equal"]} />
      <span>주문금액</span>
      <span className={styles["calc__total"]}>
        {totalPrice.toLocaleString()}
      </span>
      원
    </div>
  );
};

export default CartCalc;

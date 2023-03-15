import styles from "./CartTotal.module.css";
/* Icon */
import { AiOutlinePlusSquare } from "react-icons/ai";
import { MdPausePresentation } from "react-icons/md";
import { useSelector } from "react-redux";
const CartTotal = () => {
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
    <div className={styles["total"]}>
      <div className={styles["total__container"]}>
        총 상품가격
        <span className={styles["total__price"]}>
          {totalPrice.toLocaleString()}
        </span>
        원
        <AiOutlinePlusSquare className={styles["plus-square"]} />총 배송비
        <span className={styles["total__price"]}>0</span>원
        <MdPausePresentation className={styles["equal-square"]} />총 주문금액
        <span
          className={`${styles["total__price"]} ${styles["total__price__final"]}`}
        >
          {totalPrice.toLocaleString()}원
        </span>
      </div>
    </div>
  );
};

export default CartTotal;

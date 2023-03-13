import styles from "./CartItems.module.css";

/* redux */
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
const CartItems = () => {
  /* 장바구니에 있는 Item 정보 */
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className={styles["items"]}>
      <ul className={styles["items__menu"]}>
        <li className={styles["menu__check"]}>
          <input type={"checkbox"} />
          전체선택
        </li>
        <li className={styles["menu__info"]}>상품정보</li>
        <li className={styles["menu__total__price"]}>상품금액</li>
        <li className={styles["menu__delivary__price"]}>배송비</li>
      </ul>
      <div className={styles["items__delivary_type"]}>판매자배송 상품</div>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartItems;

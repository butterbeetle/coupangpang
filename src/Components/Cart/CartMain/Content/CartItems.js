import styles from "./CartItems.module.css";

/* redux */
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../store/cart-slice";

import CartItem from "./CartItem";
const CartItems = () => {
  const dispatch = useDispatch();
  /* 장바구니에 있는 Item 정보 */
  const cartItems = useSelector((state) => state.cart.items);
  /* 장바구니 check 정보 */
  const checked = useSelector((state) => state.cart.checked);
  /* all check 관리 */
  const allCheckHandler = (checked) => {
    dispatch(cartActions.allCheck({ checked }));
  };

  return (
    <div className={styles["items"]}>
      <ul className={styles["items__menu"]}>
        {cartItems.length > 0 && (
          <li className={styles["menu__check"]}>
            <input
              type={"checkbox"}
              onChange={(e) => allCheckHandler(e.target.checked)}
              checked={checked.length === cartItems.length ? true : false}
            />
            전체선택
          </li>
        )}
        <li className={styles["menu__info"]}>상품정보</li>
        <li className={styles["menu__total__price"]}>상품금액</li>
        <li className={styles["menu__delivary__price"]}>배송비</li>
      </ul>
      {cartItems.length > 0 && (
        <>
          <div className={styles["items__delivary_type"]}>판매자배송 상품</div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default CartItems;

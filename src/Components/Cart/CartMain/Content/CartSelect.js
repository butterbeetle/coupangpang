import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../store/cart-slice";
import styles from "./CartSelect.module.css";

const CartSelect = () => {
  const dispatch = useDispatch();
  /* 장바구니에 있는 Item 정보 */
  const cartItems = useSelector((state) => state.cart.items);
  /* 장바구니 check 정보 */
  const checked = useSelector((state) => state.cart.checked);
  /* all check 관리 */
  const allCheckHandler = (checked) => {
    dispatch(cartActions.allCheck({ checked }));
  };
  /* 전체 삭제 */
  const allDeleteHandler = () => {
    if (checked.length === 0) {
      alert("삭제할 상품을 선택해주세요.");
      return;
    }

    if (window.confirm("선택한 상품을 삭제하시겠습니까?")) {
      dispatch(cartActions.removeItemsToCart(checked));
    }
  };

  return (
    <div className={styles["select"]}>
      <div className={styles["select__check"]}>
        <input
          type="checkbox"
          onChange={(e) => allCheckHandler(e.target.checked)}
          checked={checked.length === cartItems.length ? true : false}
        />
        전체선택
        <span className={styles["cur__total"]}>
          ( {checked.length} / {cartItems.length} )
        </span>
      </div>
      <div className={styles["select__all"]} onClick={allDeleteHandler}>
        전체삭제
      </div>
      {/* <div className={styles["select__soldOut"]}>
        품절/판매종료상품 전체삭제
      </div> */}
    </div>
  );
};

export default CartSelect;

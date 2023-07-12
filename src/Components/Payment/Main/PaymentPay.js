import styles from "./PaymentPay.module.css";
import PaymentMethod from "./PaymentMethod";
/* Hook */
// import { useEffect } from "react";
/* Redux */
import { useSelector } from "react-redux";
// import { orderActions } from "../../../store/order-slice";

const PaymentPay = () => {
  // const dispatch = useDispatch();
  // const checked = useSelector((state) => state.cart.checked);
  // const cartItem = useSelector((state) => state.cart.items);
  // const purchasedItem = cartItem?.filter((item) => checked?.includes(item.id));
  const items = useSelector((state) => state.order.currentItems.items);
  const amount = items?.reduce((acc, cur) => (acc += cur.totalPrice), 0);

  /* 새로고침 했을때를 위해 다시한번 저장 */
  // useEffect(() => {
  //   dispatch(orderActions.addToCurrentItems({ items: purchasedItem }));
  // }, [dispatch, purchasedItem]);

  return (
    <div className={styles["content"]}>
      <div className={styles["title"]}>
        <h3>결제정보</h3>
      </div>
      <div className={styles["customer"]}>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>총상품가격</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              {amount.toLocaleString()}원
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>배송비</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>0원</div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>총결제금액</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              {amount.toLocaleString()}원
            </div>
          </div>
        </div>
        <PaymentMethod />
      </div>
    </div>
  );
};

export default PaymentPay;

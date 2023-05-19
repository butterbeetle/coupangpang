import styles from "./PaymentPay.module.css";
/* Hook */
import { useState } from "react";
/* Redux */
import { useSelector } from "react-redux";
import PaymentMethod from "./PaymentMethod";

const PaymentPay = () => {
  const checked = useSelector((state) => state.cart.checked);
  const cartItem = useSelector((state) => state.cart.items);

  const [totalPrice] = useState(
    cartItem
      .filter((item) => checked.includes(item.id))
      .reduce((acc, cur) => (acc += cur.totalPrice), 0)
  );

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
              {totalPrice.toLocaleString()}원
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
              {totalPrice.toLocaleString()}원
            </div>
          </div>
        </div>
        <PaymentMethod />
      </div>
    </div>
  );
};

export default PaymentPay;

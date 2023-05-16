import { useSelector } from "react-redux";
import styles from "./PaymentDelivary.module.css";
import { useState } from "react";

const PaymentDelivary = () => {
  const cartItem = useSelector((state) => state.cart);
  const [purchasedItem] = useState(
    cartItem.items.filter((item) => {
      for (let id of cartItem.checked) {
        if (id === item.id) return item;
      }
      return [];
    })
  );
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const today = new Date();
  const tomorrow = new Date(today.setDate(today.getDate() + 1));
  return (
    <div className={styles["content"]}>
      <div className={styles["title"]}>
        <h3>배송 {purchasedItem.length}건</h3>
      </div>
      <div className={styles["customer"]}>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>{`내일(${
            day[tomorrow.getDay() + 1]
          }) ${tomorrow.getMonth() + 1}/${tomorrow.getDate()} 도착 보장`}</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["prod__title"]}>
              360도 회전가능한 마그네틱 자석 휴대폰 고속 충전 케이블, C타입,
              레드
            </div>
            <div className={styles["prod__quantity"]}>수량 1개 / 무료배송</div>
          </div>

          <div className={styles["customer__info__content"]}>
            <div className={styles["prod__title"]}>
              360도 회전가능한 마그네틱 자석 휴대폰 고속 충전 케이블, C타입,
              레드
            </div>
            <div className={styles["prod__quantity"]}>수량 1개 / 무료배송</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDelivary;

import { useSelector } from "react-redux";
import styles from "./PaymentDelivary.module.css";
import { useState } from "react";
import PaymentItem from "./PaymentItem";

const PaymentDelivary = () => {
  const checked = useSelector((state) => state.cart.checked);
  const cartItem = useSelector((state) => state.cart.items);
  const [purchasedItem] = useState(
    cartItem.filter((item) => checked.includes(item.id))
  );

  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const today = new Date();
  const tomorrow = new Date(today.setDate(today.getDate() + 1));

  console.log(cartItem, purchasedItem);
  return (
    <div className={styles["content"]}>
      <div className={styles["title"]}>
        <h3>배송 {purchasedItem.length}건</h3>
      </div>
      <div className={styles["customer"]}>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>{`내일(${
            day[tomorrow.getDay()]
          }) ${tomorrow.getMonth() + 1}/${tomorrow.getDate()} 도착 보장`}</div>
          {purchasedItem.map((item) => (
            <PaymentItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentDelivary;

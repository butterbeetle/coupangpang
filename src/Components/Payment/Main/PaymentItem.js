import styles from "./PaymentItem.module.css";

const PaymentItem = ({ item }) => {
  return (
    <div className={styles["customer__info__content"]}>
      <div className={styles["prod__title"]}>{item.name}</div>
      <div className={styles["prod__quantity"]}>
        수량 {item.quantity}개 / 무료배송
      </div>
    </div>
  );
};

export default PaymentItem;

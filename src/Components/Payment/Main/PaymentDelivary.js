import { useSelector } from "react-redux";
import styles from "./PaymentDelivary.module.css";
import PaymentItem from "./PaymentItem";

const PaymentDelivary = () => {
  const currentItems = useSelector((state) => state.buy.currentItems.items);

  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const today = new Date();
  const tomorrow = new Date(today.setDate(today.getDate() + 1));

  return (
    <div className={styles["content"]}>
      <div className={styles["title"]}>
        <h3>배송 {currentItems.length}건</h3>
      </div>
      <div className={styles["customer"]}>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>{`내일(${
            day[tomorrow.getDay()]
          }) ${tomorrow.getMonth() + 1}/${tomorrow.getDate()} 도착 보장`}</div>
          {currentItems.map((item) => (
            <PaymentItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentDelivary;

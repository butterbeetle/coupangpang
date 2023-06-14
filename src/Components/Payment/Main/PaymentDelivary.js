import { useSelector } from "react-redux";
import styles from "./PaymentDelivary.module.css";
import PaymentItem from "./PaymentItem";
import { dateFormat } from "../../../Util/format";

const PaymentDelivary = () => {
  const { day, month, date } = dateFormat(new Date());
  const currentItems = useSelector((state) => state.order.currentItems.items);

  return (
    <div className={styles["content"]}>
      <div className={styles["title"]}>
        <h3>배송 {currentItems.length}건</h3>
      </div>
      <div className={styles["customer"]}>
        <div className={styles["customer__info"]}>
          <div
            className={styles["customer__info__header"]}
          >{`내일 ${day}요일 ${month}/${date} 도착 예정`}</div>
          {currentItems.map((item) => (
            <PaymentItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentDelivary;

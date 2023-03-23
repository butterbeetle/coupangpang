import styles from "./PaymentTitle.module.css";
import OrderFlow from "../../../Util/OrderFlow";

const PaymentTitle = () => {
  return (
    <div className={styles["title"]}>
      <h3>주문/결제</h3>
      <OrderFlow step={3} />
    </div>
  );
};

export default PaymentTitle;

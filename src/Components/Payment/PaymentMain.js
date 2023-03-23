import styles from "./PaymentMain.module.css";
import OrderFlow from "../../Util/OrderFlow";

const PaymentMain = () => {
  return (
    <div>
      <div className={styles["title"]}>
        <h3>주문/결제</h3>
        <OrderFlow step={3} />
      </div>
    </div>
  );
};

export default PaymentMain;

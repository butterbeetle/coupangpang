import styles from "./Payment.module.css";
import PaymentMain from "./Main/PaymentMain";

const Payment = () => {
  return (
    <div className={styles["content"]}>
      <PaymentMain />
    </div>
  );
};

export default Payment;

import styles from "./PaymentHeader.module.css";

const PaymentHeader = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__contents"]}>
        <div className={styles["logo"]} />
      </div>
    </header>
  );
};

export default PaymentHeader;

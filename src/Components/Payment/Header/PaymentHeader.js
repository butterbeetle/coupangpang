import { Link } from "react-router-dom";
import styles from "./PaymentHeader.module.css";

const PaymentHeader = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__contents"]}>
        <Link to="/">
          <div className={styles["logo"]} />
        </Link>
      </div>
    </header>
  );
};

export default PaymentHeader;

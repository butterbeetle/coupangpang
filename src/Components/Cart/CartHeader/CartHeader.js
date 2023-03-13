import { Link } from "react-router-dom";
import styles from "./CartHeader.module.css";

const CartHeader = () => {
  return (
    <header className={styles["header"]}>
      <Link to="/">
        <span className={styles["logo"]} />
      </Link>
    </header>
  );
};

export default CartHeader;

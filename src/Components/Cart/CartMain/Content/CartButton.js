import { Link } from "react-router-dom";
import styles from "./CartButton.module.css";

const CartButton = () => {
  return (
    <div className={styles["button"]}>
      <Link className={styles["button__shopping"]} to="/">
        계속 쇼핑하기
      </Link>
      <Link className={styles["button__buy"]} to="/payment">
        구매하기
      </Link>
    </div>
  );
};

export default CartButton;

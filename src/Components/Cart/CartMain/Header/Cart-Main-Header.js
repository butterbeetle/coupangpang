import styles from "./Cart-Main-Header.module.css";
import { BsCart4 } from "react-icons/bs";
import OrderFlow from "../../../../Util/OrderFlow";

const CartMainHeader = ({ step }) => {
  return (
    <header className={styles["contents__header"]}>
      <BsCart4 className={styles["contents__header-icon"]} />
      <h1>장바구니</h1>
      <OrderFlow step={step} />
    </header>
  );
};
export default CartMainHeader;

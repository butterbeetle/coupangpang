import styles from "./Cart-Main-Header.module.css";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import OrderFlow from "../../../../Util/OrderFlow";

const CartMainHeader = ({ step }) => {
  return (
    <header className={styles["contents__header"]}>
      <AiOutlineShoppingCart className={styles["contents__header-icon"]} />
      <h1>장바구니</h1>
      <OrderFlow step={step} />
    </header>
  );
};
export default CartMainHeader;

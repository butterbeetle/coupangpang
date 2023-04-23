import styles from "./SidebarCart.module.css";
import { MdPlayArrow } from "@react-icons/all-files/md/MdPlayArrow";
import { useSelector } from "react-redux";

const SidebarCart = () => {
  const cartQty = useSelector((state) => state.cart.items).length;
  return (
    <div className={styles["cart"]}>
      <div className={styles["cart__text"]}>
        장바구니
        <MdPlayArrow />
      </div>
      <div className={styles["cart__qty"]}>{cartQty}</div>
    </div>
  );
};

export default SidebarCart;

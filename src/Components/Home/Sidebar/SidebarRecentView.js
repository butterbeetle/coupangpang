import styles from "./SidebarRecentView.module.css";
import { useSelector } from "react-redux";

const SidebarRecentView = () => {
  const cartQty = useSelector((state) => state.cart.items).length;
  return (
    <div className={styles["view"]}>
      <div className={styles["view__text"]}>최근본상품</div>
      <div className={styles["view__qty"]}>{cartQty}</div>
    </div>
  );
};

export default SidebarRecentView;

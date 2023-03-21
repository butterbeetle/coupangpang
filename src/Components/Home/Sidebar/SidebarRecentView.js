import styles from "./SidebarRecentView.module.css";
/* redux */
import { useSelector } from "react-redux";

const SidebarRecentView = () => {
  const recentViewItems = useSelector((state) => state.recentView.items);
  return (
    <div className={styles["view"]}>
      <div className={styles["view__text"]}>최근본상품</div>
      <div className={styles["view__qty"]}>{recentViewItems.length}</div>
    </div>
  );
};

export default SidebarRecentView;

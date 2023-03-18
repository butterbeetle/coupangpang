import styles from "./Sidebar.module.css";
import SidebarCart from "./SidebarCart";
import SidebarRecentView from "./SidebarRecentView";

const Sidebar = () => {
  return (
    <article className={styles["main"]}>
      <SidebarCart />
      <SidebarRecentView />
    </article>
  );
};

export default Sidebar;

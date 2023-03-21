import styles from "./Sidebar.module.css";
import SidebarCart from "./SidebarCart";
import SidebarRecentView from "./SidebarRecentView";
import RecentViewItems from "./RecentViewItems";

const Sidebar = () => {
  return (
    <article className={styles["main"]}>
      <SidebarCart />
      <SidebarRecentView />
      <RecentViewItems />
    </article>
  );
};

export default Sidebar;

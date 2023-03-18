import styles from "./Sidebar.module.css";
import SidebarCart from "./SidebarCart";

const Sidebar = () => {
  return (
    <article className={styles["main"]}>
      <SidebarCart />
    </article>
  );
};

export default Sidebar;

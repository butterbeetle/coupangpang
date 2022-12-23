import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <article className={styles["sidebar"]}>
      <div className={styles["sidebar__contents"]}></div>
    </article>
  );
};

export default Sidebar;

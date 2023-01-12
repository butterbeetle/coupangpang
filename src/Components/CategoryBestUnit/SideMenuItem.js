import styles from "./SideMenuItem.module.css";

const SideMenuItem = ({ index, title, style }) => {
  return (
    <li className={styles["list"]} key={index}>
      <span className={styles[style]} />
      <span className={styles["title"]}>{title}</span>
    </li>
  );
};

export default SideMenuItem;

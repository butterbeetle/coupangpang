import { useState } from "react";
import styles from "./SideMenuItem.module.css";

const SideMenuItem = ({ item }) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <li
      key={item.key}
      className={styles["list"]}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span
        className={`
        ${styles["icon"]} 
        ${hover ? styles[item.styles + "-hover"] : styles[item.styles]} 
        ${hover ? styles[item.styles + "-color"] : ""}`}
      />
      {hover && (
        <span
          className={`${styles["title"]} ${styles[item.styles + "-title"]}`}
        >
          {item.title}
        </span>
      )}
    </li>
  );
};

export default SideMenuItem;

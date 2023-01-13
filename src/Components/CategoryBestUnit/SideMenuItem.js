import { useState } from "react";
import styles from "./SideMenuItem.module.css";

const SideMenuItem = ({ index, title, style }) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <li
      className={styles["list"]}
      key={index}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span
        className={`
        ${styles["icon"]} 
        ${hover ? styles[style + "-hover"] : styles[style]} 
        ${hover ? styles[style + "-color"] : ""}`}
      />
      {hover && (
        <span className={`${styles["title"]} ${styles[style + "-title"]}`}>
          {title}
        </span>
      )}
    </li>
  );
};

export default SideMenuItem;

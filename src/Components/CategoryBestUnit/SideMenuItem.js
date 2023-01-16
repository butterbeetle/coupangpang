import { useState } from "react";
import styles from "./SideMenuItem.module.css";
import icons from "./ItemsIcon.module.css";

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
        ${hover ? icons[item.styles + "-hover"] : icons[item.styles]} `}
      />
      {hover && (
        <span className={`${styles["title"]} ${icons[item.styles + "-color"]}`}>
          {item.title}
        </span>
      )}
    </li>
  );
};

export default SideMenuItem;

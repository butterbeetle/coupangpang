import { useContext, useState } from "react";
import styles from "./SideMenuItem.module.css";
import icons from "./ItemsIcon.module.css";
import SideMenuContext from "../../store/sideMenu-context";

const SideMenuItem = ({ item }) => {
  const SideMenuCtx = useContext(SideMenuContext);
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

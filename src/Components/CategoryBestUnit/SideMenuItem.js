import { useContext, useState } from "react";
import styles from "./SideMenuItem.module.css";
import icons from "./ItemsIcon.module.css";
import { SideMenuContext } from "../../store/sideMenu-context";

const SideMenuItem = (props) => {
  const sideCtx = useContext(SideMenuContext);
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };

  const onClick = () => {
    sideCtx.scrollOffset(props.idx);
  };

  return (
    <li
      key={props.item.key}
      className={styles["list"]}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <span
        className={`
        ${styles["icon"]} 
        ${
          hover ? icons[props.item.styles + "-hover"] : icons[props.item.styles]
        } `}
      />
      {hover && (
        <span
          className={`${styles["title"]} ${
            icons[props.item.styles + "-color"]
          }`}
        >
          {props.item.title}
        </span>
      )}
    </li>
  );
};

export default SideMenuItem;

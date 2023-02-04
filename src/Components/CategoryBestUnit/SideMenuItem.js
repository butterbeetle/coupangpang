import { useContext, useEffect, useState } from "react";
import styles from "./SideMenuItem.module.css";
import icons from "./ItemsIcon.module.css";
import { SideMenuContext } from "../../store/sideMenu-context";

const SideMenuItem = (props) => {
  const sideCtx = useContext(SideMenuContext);
  const [hover, setHover] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const offset = sideCtx.arr;

  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };

  const onClick = () => {
    sideCtx.scrollOffset(props.idx);
  };

  const scrollHandler = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", scrollHandler);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  useEffect(() => {
    if (offset[props.idx] <= scrollY && scrollY < offset[props.idx] + 610) {
      setScroll(true);
    } else setScroll(false);
  }, [scrollY, offset, props.idx]);

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
          hover || scroll
            ? icons[props.item.styles + "-hover"]
            : icons[props.item.styles]
        } 
        `}
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

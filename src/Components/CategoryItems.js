import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryItems.module.css";
import Dropdown from "./Dropdown";

const CategoryItems = ({ items, depth }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  const title = depth === 0 ? styles["title__padding"] : null;
  const active = dropdown ? styles["active"] : null;
  const icon = dropdown ? items.icon + "__active" : items.icon;
  const background = dropdown ? items.icon + "__bg" : null;

  const arrow =
    depth === 0 ? styles["arrow"] : depth === 1 ? styles["arrow__depth"] : null;

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mouseenter", handler);
    return () => {
      document.removeEventListener("mouseenter", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <li
      className={styles["menu-items"]}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button type="button" className={`${styles[icon]}`}>
            <Link className={`${title} ${active}`} to="/">
              {items.title}
            </Link>
            {dropdown && <span className={arrow} />}
          </button>
          <Dropdown
            depth={depth}
            submenus={items.submenu}
            dropdown={dropdown}
            icon={items.icon}
          />
        </>
      ) : (
        <>
          <button type="button" className={`${styles[items.icon]}`}>
            <Link className={`${title} ${active}`} to="/">
              {items.title}
            </Link>
            {dropdown && <span className={arrow} />}
          </button>
        </>
      )}
    </li>
  );
};

export default React.memo(CategoryItems);

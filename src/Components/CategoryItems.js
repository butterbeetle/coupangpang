import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryItems.module.css";
import Dropdown from "./Dropdown";

const CategoryItems = ({ items, depth }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  const title = depth === 0 && styles["title__padding"];
  const line = depth === 0 && styles["line"];

  const more = items.title === "더보기" && styles["active"];
  const active = dropdown ? styles["active"] : null;
  const icon = dropdown ? items.icon + "__active" : items.icon;

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
      className={`${styles["menu-items"]} ${line}`}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <Fragment>
          <button type="button" className={`${styles[icon]} `}>
            <Link className={`${title} ${active} `} to="/">
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
        </Fragment>
      ) : (
        <Fragment>
          <button type="button" className={`${styles[items.icon]}`}>
            <Link className={`${title} ${active} ${more}`} to="/">
              {items.title}
            </Link>
          </button>
        </Fragment>
      )}
    </li>
  );
};

export default React.memo(CategoryItems);

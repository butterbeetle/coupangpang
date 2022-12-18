import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryItems.module.css";
import Dropdown from "./Dropdown";

const CategoryItems = ({ items, depth }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  let title = depth === 0 ? styles["title__padding"] : null;
  let arrow =
    depth === 0 ? styles["arrow"] : depth === 1 ? styles["arrow__depth"] : null;

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mouseenter", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mouseenter", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
    console.log("Enter", depth);
  };

  const onMouseLeave = () => {
    setDropdown(false);
    console.log("Leave");
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
          <button type="button" className={`${styles[items.icon]}`}>
            <Link className={title} to="/">
              {items.title}
            </Link>
            <span className={arrow} />
          </button>
          <Dropdown
            depth={depth}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <>
          <button type="button" className={`${styles[items.icon]}`}>
            <Link className={title} to="/">
              {items.title}
            </Link>
            <span className={arrow} />
          </button>
        </>
      )}
    </li>
  );
};

export default CategoryItems;

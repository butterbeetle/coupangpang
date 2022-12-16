import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryItems.module.css";
import Dropdown from "./Dropdown";

const CategoryItems = ({ items, depth }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

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
    console.log("Enter");
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
          <button type="button">
            <Link to="/">{items.title}</Link>
          </button>
          <Dropdown
            depth={depth}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <button>
          <Link to="/">{items.title}</Link>
        </button>
      )}
    </li>
  );
};

export default CategoryItems;

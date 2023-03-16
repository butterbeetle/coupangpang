import CategoryItems from "../Layout/Header/CategoryItems";
import styles from "./Dropdown.module.css";

const Dropdown = ({ submenus, dropdown, depth, icon }) => {
  depth = depth + 1;
  const dropdownClass = depth > 1 ? styles["dropdown__submenu"] : "";
  const background = dropdown ? icon + "__bg" : null;

  return (
    <ul
      className={`${styles["dropdown"]} ${dropdownClass} ${
        dropdown ? styles["show"] : ""
      } `}
    >
      {depth === 1 && <span className={`${styles[background]}`} />}
      {submenus.map((submenu, idx) => (
        <CategoryItems items={submenu} key={idx} depth={depth} />
      ))}
    </ul>
  );
};

export default Dropdown;

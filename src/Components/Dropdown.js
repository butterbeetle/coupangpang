import CategoryItems from "./CategoryItems";
import styles from "./Dropdown.module.css";

const Dropdown = ({ submenus, dropdown, depth }) => {
  depth = depth + 1;
  const dropdownClass = depth > 1 ? styles["dropdown__submenu"] : "";
  // console.log("submenus:", submenus);

  return (
    <ul
      className={`${styles["dropdown"]} ${dropdownClass} ${
        dropdown ? styles["show"] : ""
      }`}
    >
      {submenus.map((submenu, idx) => (
        <CategoryItems items={submenu} key={idx} depth={depth} />
      ))}
    </ul>
  );
};

export default Dropdown;

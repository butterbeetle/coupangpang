import styles from "./CategoryBestUnit.module.css";

import SideMenu from "./CategoryBestUnit/SideMenu";
import Contents from "./CategoryBestUnit/Contents";
import { SideMenuContext } from "../store/sideMenu-context";
import { useContext } from "react";

const CategoryBestUnit = () => {
  const sideCtx = useContext(SideMenuContext);
  return (
    <article className={styles["best-unit"]}>
      <span className={styles["title"]} />
      <SideMenu />
      {sideCtx.sideBarItems.map(
        (items) => items.visible && <Contents key={items.key} items={items} />
      )}
    </article>
  );
};
export default CategoryBestUnit;

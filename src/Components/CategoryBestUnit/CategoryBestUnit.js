import styles from "./CategoryBestUnit.module.css";

import SideMenu from "./SideMenu/SideMenu";
import Contents from "./Contents";
import { SideMenuContext } from "../../store/sideMenu-context";
import { useContext } from "react";

const CategoryBestUnit = () => {
  const sideCtx = useContext(SideMenuContext);

  return (
    <article className={styles["best-unit"]}>
      <span className={styles["title"]} />
      {sideCtx.scrollY > 2000 &&
        sideCtx.sideBarItems.map(
          (items) => items.visible && <Contents key={items.key} items={items} />
        )}
      {sideCtx.scrollY > 3300 && <SideMenu />}
    </article>
  );
};
export default CategoryBestUnit;

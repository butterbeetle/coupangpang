import styles from "./CategoryBestUnit.module.css";
import { useContext } from "react";
import SideMenu from "./SideMenu/SideMenu";
/* Context */
import { SideMenuContext } from "../../store/sideMenu-context";

// const Contents = lazy(() => import("./Contents"));

import Contents from "./Contents";

const CategoryBestUnit = () => {
  const sideCtx = useContext(SideMenuContext);

  return (
    <article className={styles["best-unit"]}>
      <span className={styles["title"]} />=
      {sideCtx.sideBarItems.map(
        (items) => items.visible && <Contents key={items.key} items={items} />
      )}
      {sideCtx.scrollY > 3300 && <SideMenu />}
    </article>
  );
};
export default CategoryBestUnit;

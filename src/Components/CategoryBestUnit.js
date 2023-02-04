import styles from "./CategoryBestUnit.module.css";

import SideMenu from "./CategoryBestUnit/SideMenu";
import Contents from "./CategoryBestUnit/Contents";
import { SideMenuContext } from "../store/sideMenu-context";
import { useContext, useEffect, useState } from "react";

const CategoryBestUnit = () => {
  const sideCtx = useContext(SideMenuContext);

  const [scrollY, setScrollY] = useState(0);
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

  return (
    <article className={styles["best-unit"]}>
      <span className={styles["title"]} />
      {scrollY > 2000 &&
        sideCtx.sideBarItems.map(
          (items) => items.visible && <Contents key={items.key} items={items} />
        )}
      {scrollY > 3300 && <SideMenu />}
    </article>
  );
};
export default CategoryBestUnit;

import styles from "./Contents.module.css";

import SideMenuProvider from "../../store/sideMenu-context";

import Sidebar from "./Sidebar/Sidebar";
import Discovery from "../Discovery/Discovery";
import Advertisement from "../Advertisement/Advertisement";
import CategoryBestUnit from "../CategoryBestUnit/CategoryBestUnit";

// const Sidebar = lazy(() => import("./Sidebar/Sidebar"));
// const Discovery = lazy(() => import("../Discovery/Discovery"));
// const Advertisement = lazy(() => import("../Advertisement/Advertisement"));
// const CategoryBestUnit = lazy(() =>
//   import("../CategoryBestUnit/CategoryBestUnit")
// );

const Contents = () => {
  return (
    <section className={styles["contents"]}>
      <Sidebar />
      <Discovery />
      <Advertisement />
      <SideMenuProvider>
        <CategoryBestUnit />
      </SideMenuProvider>
    </section>
  );
};

export default Contents;

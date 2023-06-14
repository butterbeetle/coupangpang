import styles from "./Contents.module.css";
import { Suspense, lazy } from "react";

import SideMenuProvider from "../../store/sideMenu-context";

import LoadingModal from "../../UI/LoadingModal";

const Sidebar = lazy(() => import("./Sidebar/Sidebar"));
const Discovery = lazy(() => import("../Discovery/Discovery"));
const Advertisement = lazy(() => import("../Advertisement/Advertisement"));
const CategoryBestUnit = lazy(() =>
  import("../CategoryBestUnit/CategoryBestUnit")
);

const Contents = () => {
  return (
    <Suspense fallback={<LoadingModal />}>
      <section className={styles["contents"]}>
        <Sidebar />
        <Discovery />
        <Advertisement />
        <SideMenuProvider>
          <CategoryBestUnit />
        </SideMenuProvider>
      </section>
    </Suspense>
  );
};

export default Contents;

import styles from "./Contents.module.css";
import Sidebar from "./Sidebar";
import Discovery from "./Discovery/Discovery";
import Advertisement from "./Advertisement/Advertisement";
import CategoryBestUnit from "./CategoryBestUnit";
import SideMenuProvider from "../store/sideMenu-context";

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

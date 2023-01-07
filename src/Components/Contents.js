import styles from "./Contents.module.css";
import Sidebar from "./Sidebar";
import Discovery from "./Discovery/Discovery";
import Advertisement from "./Advertisement/Advertisement";
import CategoryBestUnit from "./CategoryBestUnit";

const Contents = () => {
  return (
    <section className={styles["contents"]}>
      <Sidebar />
      <Discovery />
      <Advertisement />
      <CategoryBestUnit />
    </section>
  );
};

export default Contents;

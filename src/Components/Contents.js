import styles from "./Contents.module.css";
import Sidebar from "./Sidebar";
import Discovery from "./Discovery/Discovery";
import Advertisement from "./Advertisement/Advertisement";
import RecommendCategory from "./RecommendCategory";

const Contents = () => {
  return (
    <section className={styles["contents"]}>
      <Sidebar />
      <Discovery />
      <Advertisement />
      <RecommendCategory />
    </section>
  );
};

export default Contents;

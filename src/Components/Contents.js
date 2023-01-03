import styles from "./Contents.module.css";
import Sidebar from "./Sidebar";
import Discovery from "./Discovery";
import RecommendCategory from "./RecommendCategory";
import Advertisement from "./Advertisement";

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

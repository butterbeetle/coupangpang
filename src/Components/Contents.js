import styles from "./Contents.module.css";
import Sidebar from "./Sidebar";
import Discovery from "./Discovery";
import Recommend from "./Recommend";
import RecommendCategory from "./RecommendCategory";

const Contents = () => {
  return (
    <section className={styles["contents"]}>
      <Sidebar />
      <Discovery />
      <Recommend />
      <RecommendCategory />
    </section>
  );
};

export default Contents;

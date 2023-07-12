import styles from "./Discovery.module.css";
import DiscoveryItems from "./DiscoveryItems";

const Discovery = () => {
  return (
    <article className={styles["main"]}>
      <div className={styles["contents"]}>
        <span className={styles["title"]} />
        <div className={styles["items"]}>
          <div className={styles["grid"]}>
            {Array.from({ length: 9 }, () => 0).map((_, idx) => (
              <DiscoveryItems key={idx} idx={idx + 1} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Discovery;

import styles from "./Discovery.module.css";
import DiscoveryItems from "./DiscoveryItems";

const discoveryItems = [
  { url: "/" },
  { url: "/" },
  { url: "/" },
  { url: "/" },
  { url: "/" },
  { url: "/" },
  { url: "/" },
  { url: "/" },
  { url: "/" },
];

const Discovery = () => {
  return (
    <article className={styles["main"]}>
      <div className={styles["contents"]}>
        <span className={styles["title"]} />
        <div className={styles["items"]}>
          <div className={styles["grid"]}>
            {discoveryItems.map((item, idx) => (
              <DiscoveryItems key={idx} url={item.url} idx={idx + 1} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Discovery;

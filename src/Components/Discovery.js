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
    <article className={styles["discovery"]}>
      <div>
        <span className={styles["discovery__title"]} />
        <div className={styles["discovery__items"]}>
          <div className={styles["discovery__grid"]}>
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

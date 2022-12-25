import styles from "./Discovery.module.css";
import DiscoveryItems from "./DiscoveryItems";

const discoveryItems = [
  { idx: "01", url: "/" },
  { idx: "02", url: "/" },
  { idx: "03", url: "/" },
  { idx: "04", url: "/" },
  { idx: "05", url: "/" },
  { idx: "06", url: "/" },
  { idx: "07", url: "/" },
  { idx: "08", url: "/" },
  { idx: "09", url: "/" },
];

const Discovery = () => {
  return (
    <article className={styles["discovery"]}>
      <div>
        <span className={styles["discovery__title"]} />
        <div className={styles["discovery__items"]}>
          <div className={styles["discovery__grid"]}>
            {discoveryItems.map((item) => (
              <DiscoveryItems url={item.url} idx={item.idx} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Discovery;

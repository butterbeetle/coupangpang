import styles from "./Discovery.module.css";

const Discovery = () => {
  return (
    <article className={styles["contents__discovery"]}>
      <div>
        <span className={styles["contents__discovery--title"]} />
        <div className={styles["contents__discovery--items"]}>
          <div className={styles["contents__discovery--items--grid"]}>
            <div className={[styles.item, styles.today_item1].join(" ")}>
              item1
            </div>
            <div className={[styles.item, styles.today_item2].join(" ")}>
              item2
            </div>
            <div className={[styles.item, styles.today_item3].join(" ")}>
              item3
            </div>
            <div className={[styles.item, styles.today_item4].join(" ")}>
              item4
            </div>
            <div className={[styles.item, styles.today_item5].join(" ")}>
              item5
            </div>
            <div className={[styles.item, styles.today_item6].join(" ")}>
              item6
            </div>
            <div className={[styles.item, styles.today_item7].join(" ")}>
              item7
            </div>
            <div className={[styles.item, styles.today_item8].join(" ")}>
              item8
            </div>
            <div className={[styles.item, styles.today_item9].join(" ")}>
              item9
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Discovery;

import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TodayItems.module.css";

const TodayItems = ({ item, idx }) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <li key={idx} className={styles["today-item"]}>
      <Link to={item.url}>
        <img
          className={styles["today-item-small"]}
          src={item.small_banner_src}
          alt={"작은 배너" + idx}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        (
        <img
          className={styles["today-item-big"]}
          src={item.big_banner_src}
          alt={"큰 배너" + idx}
        />
        )
      </Link>
    </li>
  );
};

export default TodayItems;

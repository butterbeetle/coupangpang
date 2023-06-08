import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TodayItems.module.css";

const TodayItems = ({ item, idx, activeItem, itemNumber, isActive }) => {
  const [autoBorder, setAutoBorder] = useState(false);
  const [manualBorder, setManualBorder] = useState(false);

  useEffect(() => {
    if (idx === itemNumber) {
      setAutoBorder(true);
    } else {
      setAutoBorder(false);
    }
  }, [idx, itemNumber]);

  useEffect(() => {
    if (idx !== activeItem) {
      setAutoBorder(false);
    } else {
      setAutoBorder(true);
    }
  }, [idx, activeItem]);

  const onMouseEnter = () => {
    setManualBorder(true);
    isActive(idx);
  };

  const onMouseLeave = () => {
    setManualBorder(false);
  };

  const hoverStyles = autoBorder || manualBorder ? styles["hover"] : null;
  const show = autoBorder || manualBorder ? styles["show"] : null;

  return (
    <li
      key={idx}
      className={styles["today-item"]}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link to={item.url} title="item">
        <img
          className={`${styles["today-item-small"]} ${hoverStyles}`}
          src={item.small_banner_src}
          alt={"작은 배너" + idx}
          loading="lazy"
        />
        <img
          className={`${styles["today-item-big"]} ${show}`}
          src={item.big_banner_src}
          alt={"큰 배너" + idx}
          loading="lazy"
        />
      </Link>
    </li>
  );
};

export default TodayItems;

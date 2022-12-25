import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./DiscoveryItems.module.css";

const DiscoveryItems = ({ url, idx }) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };

  let buyButton = hover ? (
    <span className={`${styles["discovery__item--buying"]}`} />
  ) : (
    <span className={`${styles["discovery__item--arrow"]}`} />
  );
  return (
    <div
      className={`${styles["discovery__item"]} ${styles["grid__item0" + idx]}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link to={url}>
        <span className={`${styles["discovery__item--img0" + idx]}`} />
        {buyButton}
      </Link>
    </div>
  );
};

export default DiscoveryItems;

import { useState } from "react";
import styles from "./RecentViewItem.module.css";

/* Icon */
import { BsFillXSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const RecentViewItem = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className={styles["item"]}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link to={`/products/${item.id}`}>
        <img src={item.realUrl} alt="" />

        {
          <div
            className={`${styles["item__infos"]} ${
              isHover ? styles["visible"] : styles["none"]
            }`}
          >
            <BsFillXSquareFill className={styles["cancel"]} title="닫기" />
            <div className={styles["info"]}>
              <span className={styles["title"]}>{item.title}</span>
              <span className={styles["price"]}>
                <p className={styles["price__value"]}>
                  {item.price.toLocaleString()}
                </p>
                원
              </span>
            </div>
          </div>
        }
      </Link>
    </div>
  );
};

export default RecentViewItem;

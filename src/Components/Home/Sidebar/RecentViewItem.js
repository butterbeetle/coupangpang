import { useState } from "react";
import styles from "./RecentViewItem.module.css";

/* Icon */
import { BsFillXSquareFill } from "react-icons/bs";

const RecentViewItem = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className={styles["item"]}>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <img src={item.realUrl} alt="" />
      </div>

      {isHover && (
        <div className={styles["item__infos"]}>
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
      )}
    </div>
  );
};

export default RecentViewItem;

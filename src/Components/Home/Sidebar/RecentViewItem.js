import { useState } from "react";
import styles from "./RecentViewItem.module.css";

/* Icon */
import { BsFillXSquareFill } from "@react-icons/all-files/bs/BsFillXSquareFill";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { recentViewSliceActions } from "../../../store/recentView-slice";

const RecentViewItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);
  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };
  const removeRecentItem = () => {
    dispatch(recentViewSliceActions.removeItemToRecentView(item.id));
  };
  return (
    <div
      className={styles["item"]}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <BsFillXSquareFill
        className={`${styles["cancel"]} ${
          isHover ? styles["visible"] : styles["none"]
        }`}
        title="닫기"
        onClick={removeRecentItem}
      />
      <Link to={`products/${item.id}`}>
        <img src={item.realUrl} alt="" loading="lazy" />

        {
          <div
            className={`${styles["item__infos"]} ${
              isHover ? styles["visible"] : styles["none"]
            }`}
          >
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

import styles from "./RecentViewItems.module.css";
import { useState } from "react";
import RecentViewItem from "./RecentViewItem";
/* redux */
import { useSelector } from "react-redux";
/* Icon */
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const RecentViewItems = () => {
  const recentViewItems = useSelector((state) => state.recentView.items);
  const offset = 4;
  const totalItems = recentViewItems.length; //12
  const maxIndex = Math.ceil(totalItems / offset) - 1;
  const [index, setIndex] = useState(0);

  const increaseIndex = () => {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };
  const decreaseIndex = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };
  console.log(index, maxIndex);
  return (
    <div className={styles["items"]}>
      {recentViewItems
        .slice(offset * index, offset * index + offset)
        .map((item) => (
          <RecentViewItem key={item.id} item={item} />
        ))}
      <div className={styles["ctrl"]}>
        <div className={styles["ctrl__counter"]}>
          <p className={styles["ctrl__pageNumber"]}>{index + 1}</p>/
          {maxIndex + 1}
        </div>
        {maxIndex > 0 && (
          <div className={styles["ctrl__btn"]}>
            <MdKeyboardArrowLeft
              className={styles["left"]}
              title="이전 페이지 보기"
              onClick={decreaseIndex}
            />
            <MdKeyboardArrowRight
              title="다음 페이지 보기"
              onClick={increaseIndex}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentViewItems;

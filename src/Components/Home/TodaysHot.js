import styles from "./TodaysHot.module.css";

import TodayItems from "./TodayItems";
import { useEffect, useState } from "react";
import useInterval from "../../hooks/useInterval";

const todayHotItems = [
  {
    url: "/",
    small_banner_src: require(`../../assets/img/banner/small_banner01.webp`),
    big_banner_src: require(`../../assets/img/banner/big_banner01.webp`),
  },
  {
    url: "/",
    small_banner_src: require(`../../assets/img/banner/small_banner02.webp`),
    big_banner_src: require(`../../assets/img/banner/big_banner02.webp`),
  },
  {
    url: "/",
    small_banner_src: require(`../../assets/img/banner/small_banner03.webp`),
    big_banner_src: require(`../../assets/img/banner/big_banner03.webp`),
  },
  {
    url: "/",
    small_banner_src: require(`../../assets/img/banner/small_banner04.webp`),
    big_banner_src: require(`../../assets/img/banner/big_banner04.webp`),
  },
  {
    url: "/",
    small_banner_src: require(`../../assets/img/banner/small_banner05.webp`),
    big_banner_src: require(`../../assets/img/banner/big_banner05.webp`),
  },
  {
    url: "/",
    small_banner_src: require(`../../assets/img/banner/small_banner06.webp`),
    big_banner_src: require(`../../assets/img/banner/big_banner06.webp`),
  },
];

const TodaysHot = () => {
  const [activeItem] = useState(0);
  const { count, start, stop, reset, resetNum } = useInterval(0, 2000);

  useEffect(() => {
    if (count > 5) {
      reset();
    }
    start();
  }, [count, reset, start]);

  const isActive = (num) => {
    resetNum(num);
  };

  // console.log(count, activeItem);

  return (
    <section
      className={styles["today"]}
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      <div className={styles["main"]}>
        <ul className={styles["today-items"]}>
          {todayHotItems.map((item, idx) => {
            return (
              <TodayItems
                key={idx}
                item={item}
                idx={idx}
                activeItem={activeItem}
                itemNumber={count}
                isActive={isActive}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default TodaysHot;

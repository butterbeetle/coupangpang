import styles from "./TodaysHot.module.css";

import TodayItems from "./TodayItems";
import { useEffect, useState } from "react";
import useInterval from "../../hooks/useInterval";

import small_banner_01 from "../../assets/img/banner/small_banner01.webp";
import small_banner_02 from "../../assets/img/banner/small_banner02.webp";
import small_banner_03 from "../../assets/img/banner/small_banner03.webp";
import small_banner_04 from "../../assets/img/banner/small_banner04.webp";
import small_banner_05 from "../../assets/img/banner/small_banner05.webp";
import small_banner_06 from "../../assets/img/banner/small_banner06.webp";

import big_banner_01 from "../../assets/img/banner/big_banner01.webp";
import big_banner_02 from "../../assets/img/banner/big_banner02.webp";
import big_banner_03 from "../../assets/img/banner/big_banner03.webp";
import big_banner_04 from "../../assets/img/banner/big_banner04.webp";
import big_banner_05 from "../../assets/img/banner/big_banner05.webp";
import big_banner_06 from "../../assets/img/banner/big_banner06.webp";

const todayHotItems = [
  {
    url: "/",
    small_banner_src: small_banner_01,
    big_banner_src: big_banner_01,
  },
  {
    url: "/",
    small_banner_src: small_banner_02,
    big_banner_src: big_banner_02,
  },
  {
    url: "/",
    small_banner_src: small_banner_03,
    big_banner_src: big_banner_03,
  },
  {
    url: "/",
    small_banner_src: small_banner_04,
    big_banner_src: big_banner_04,
  },
  {
    url: "/",
    small_banner_src: small_banner_05,
    big_banner_src: big_banner_05,
  },
  {
    url: "/",
    small_banner_src: small_banner_06,
    big_banner_src: big_banner_06,
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

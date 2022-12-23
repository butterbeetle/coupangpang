import styles from "./TodaysHot.module.css";
//banner img
import big_banner01 from "../assets/img/banner/big_banner01.jpg";
import big_banner02 from "../assets/img/banner/big_banner02.jpg";
import big_banner03 from "../assets/img/banner/big_banner03.jpg";
import big_banner04 from "../assets/img/banner/big_banner04.jpg";
import big_banner05 from "../assets/img/banner/big_banner05.png";
import big_banner06 from "../assets/img/banner/big_banner06.jpg";
import small_banner01 from "../assets/img/banner/small_banner01.png";
import small_banner02 from "../assets/img/banner/small_banner02.png";
import small_banner03 from "../assets/img/banner/small_banner03.png";
import small_banner04 from "../assets/img/banner/small_banner04.png";
import small_banner05 from "../assets/img/banner/small_banner05.png";
import small_banner06 from "../assets/img/banner/small_banner06.png";

import TodayItems from "./TodayItems";
import { useEffect, useState } from "react";
import useInterval from "../hooks/useInterval";

const todayHotItems = [
  {
    url: "/",
    small_banner_src: small_banner01,
    big_banner_src: big_banner01,
  },
  {
    url: "/",
    small_banner_src: small_banner02,
    big_banner_src: big_banner02,
  },
  {
    url: "/",
    small_banner_src: small_banner03,
    big_banner_src: big_banner03,
  },
  {
    url: "/",
    small_banner_src: small_banner04,
    big_banner_src: big_banner04,
  },
  {
    url: "/",
    small_banner_src: small_banner05,
    big_banner_src: big_banner05,
  },
  {
    url: "/",
    small_banner_src: small_banner06,
    big_banner_src: big_banner06,
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
    </section>
  );
};

export default TodaysHot;

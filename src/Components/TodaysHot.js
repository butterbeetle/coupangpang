import styles from "./TodaysHot.module.css";
//banner img
import big_banner1 from "../assets/img/banner/big_banner1.jpg";
import big_banner2 from "../assets/img/banner/big_banner2.jpg";
import big_banner3 from "../assets/img/banner/big_banner3.jpg";
import big_banner4 from "../assets/img/banner/big_banner4.jpg";
import big_banner5 from "../assets/img/banner/big_banner5.png";
import big_banner6 from "../assets/img/banner/big_banner6.jpg";
import small_banner1 from "../assets/img/banner/small_banner1.png";
import small_banner2 from "../assets/img/banner/small_banner2.png";
import small_banner3 from "../assets/img/banner/small_banner3.png";
import small_banner4 from "../assets/img/banner/small_banner4.png";
import small_banner5 from "../assets/img/banner/small_banner5.png";
import small_banner6 from "../assets/img/banner/small_banner6.png";

import TodayItems from "./TodayItems";
import { useCallback, useEffect, useRef, useState } from "react";

const todayHotItems = [
  {
    url: "/",
    small_banner_src: small_banner1,
    big_banner_src: big_banner1,
  },
  {
    url: "/",
    small_banner_src: small_banner2,
    big_banner_src: big_banner2,
  },
  {
    url: "/",
    small_banner_src: small_banner3,
    big_banner_src: big_banner3,
  },
  {
    url: "/",
    small_banner_src: small_banner4,
    big_banner_src: big_banner4,
  },
  {
    url: "/",
    small_banner_src: small_banner5,
    big_banner_src: big_banner5,
  },
  {
    url: "/",
    small_banner_src: small_banner6,
    big_banner_src: big_banner6,
  },
];

const useTest = (initValue, ms) => {
  const [count, setCount] = useState(initValue);
  const intervalRef = useRef(null);

  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, ms);
  }, [ms]);

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return { count, start, stop, reset };
};

const TodaysHot = () => {
  const [activeItem, setActiveItem] = useState(0);
  const { count, start, stop, reset } = useTest(0, 2000);

  useEffect(() => {
    if (count > 5) {
      reset();
    }
    start();
  }, [count, reset, start]);

  const isActive = (num) => {
    setActiveItem(num);
  };
  console.log(count, activeItem);
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

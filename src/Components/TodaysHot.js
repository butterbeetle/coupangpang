import styles from "./TodaysHot.module.css";
//banner img
import big_banner1 from "../assets/img/banner/big_banner1.jpg";
import big_banner2 from "../assets/img/banner/big_banner2.jpg";
import small_banner1 from "../assets/img/banner/small_banner1.png";
import small_banner2 from "../assets/img/banner/small_banner2.png";

import TodayItems from "./TodayItems";
import { useEffect, useState } from "react";

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
];

const TodaysHot = () => {
  const [test, setTest] = useState([0, 0, 0, 0, 0, 0]);

  let idx = 0;

  useEffect(() => {
    const switchTest = () => {
      // if (idx > 5) idx = 0;
      console.log("TEST...", idx++);
    };
    setInterval(switchTest, 2000);
  }, [idx]);

  return (
    <section className={styles["today"]}>
      <ul className={styles["today-items"]}>
        {todayHotItems.map((item, idx) => {
          return <TodayItems key={idx} item={item} idx={idx} />;
        })}
      </ul>
    </section>
  );
};

export default TodaysHot;

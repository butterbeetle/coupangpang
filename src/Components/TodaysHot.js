import styles from "./TodaysHot.module.css";
//banner img
import big_banner1 from "../img/banner/today_hot_big_banner1.jpg";
import today_item1 from "../img/banner/today_hot_banner_item1.png";
import today_item2 from "../img/banner/today_hot_banner_item2.png";
import today_item3 from "../img/banner/today_hot_banner_item3.png";
import today_item4 from "../img/banner/today_hot_banner_item4.png";
import today_item5 from "../img/banner/today_hot_banner_item5.png";
import today_item6 from "../img/banner/today_hot_banner_item6.png";

const TodaysHot = () => {
  return (
    <section className={styles.todaySection}>
      <img className={styles.banner} src={big_banner1} alt="큰 배너1" />
      <ul>
        <li>
          <a href="/">
            <img src={today_item1} alt="배너1" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={today_item2} alt="배너2" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={today_item3} alt="배너3" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={today_item4} alt="배너4" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={today_item5} alt="배너5" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={today_item6} alt="배너6" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default TodaysHot;

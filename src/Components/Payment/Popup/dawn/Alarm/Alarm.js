import styles from "./Alarm.module.css";
import Body from "./Body";
import Header from "./Header";

const Alarm = () => {
  return (
    <div className={styles["alarm"]}>
      <Header />
      <Body />
    </div>
  );
};

export default Alarm;

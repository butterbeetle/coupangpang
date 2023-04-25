import styles from "./Body.module.css";
import { useState } from "react";

const Body = () => {
  const [value, setValue] = useState("seven");
  const onClick = (e) => {
    setValue(e);
  };
  return (
    <div className={styles["alarm__body"]}>
      <label className={styles["seven"]} onClick={() => onClick("seven")}>
        <div
          className={`${styles["big__circle"]} ${
            value === "seven" ? styles["big__select"] : ""
          }`}
        >
          <div
            className={`${styles["small__circle"]} ${
              value === "seven" ? styles["small__select"] : ""
            }`}
          />
        </div>
        오전 7시 이후
      </label>

      <label className={styles["atOnce"]} onClick={() => onClick("atOnce")}>
        <div
          className={`${styles["big__circle"]} ${
            value === "atOnce" ? styles["big__select"] : ""
          }`}
        >
          <div
            className={`${styles["small__circle"]} ${
              value === "atOnce" ? styles["small__select"] : ""
            }`}
          />
        </div>
        배송 직후
      </label>
    </div>
  );
};

export default Body;

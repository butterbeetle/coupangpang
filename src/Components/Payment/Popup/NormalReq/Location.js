import styles from "./Location.module.css";
/* Hook */
import { useState } from "react";
import LocationOpt from "./LocationOpt";
const Location = () => {
  const [value, setValue] = useState("door");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles["location"]}>
      <label className={styles["door"]} htmlFor="door">
        <div
          className={`${styles["big__circle"]} ${
            value === "door" ? styles["big__select"] : ""
          }`}
        >
          <div
            className={`${styles["small__circle"]} ${
              value === "door" ? styles["small__select"] : ""
            }`}
          />
        </div>
        <input
          id="door"
          value="door"
          type="radio"
          onChange={onChange}
          checked={value === "door"}
        />
        문 앞
      </label>

      <label className={styles["door_absence"]} htmlFor="door_absence">
        <div
          className={`${styles["big__circle"]} ${
            value === "door_absence" ? styles["big__select"] : ""
          }`}
        >
          <div
            className={`${styles["small__circle"]} ${
              value === "door_absence" ? styles["small__select"] : ""
            }`}
          />
        </div>
        <input
          id="door_absence"
          value="door_absence"
          type="radio"
          onChange={onChange}
          checked={value === "door_absence"}
        />
        직접 받고 부재 시 문 앞
      </label>

      <label className={styles["security_office"]} htmlFor="security_office">
        <div
          className={`${styles["big__circle"]} ${
            value === "security_office" ? styles["big__select"] : ""
          }`}
        >
          <div
            className={`${styles["small__circle"]} ${
              value === "security_office" ? styles["small__select"] : ""
            }`}
          />
        </div>
        <input
          id="security_office"
          value="security_office"
          type="radio"
          onChange={onChange}
          checked={value === "security_office"}
        />
        경비실
      </label>

      <label className={styles["delivery_box"]} htmlFor="delivery_box">
        <div
          className={`${styles["big__circle"]} ${
            value === "delivery_box" ? styles["big__select"] : ""
          }`}
        >
          <div
            className={`${styles["small__circle"]} ${
              value === "delivery_box" ? styles["small__select"] : ""
            }`}
          />
        </div>
        <input
          id="delivery_box"
          value="delivery_box"
          type="radio"
          onChange={onChange}
          checked={value === "delivery_box"}
        />
        택배함
      </label>
      {value === "delivery_box" && <LocationOpt type="delivery_box" />}

      <label className={styles["etc"]} htmlFor="etc">
        <div
          className={`${styles["big__circle"]} ${
            value === "etc" ? styles["big__select"] : ""
          }`}
        >
          <div
            className={`${styles["small__circle"]} ${
              value === "etc" ? styles["small__select"] : ""
            }`}
          />
        </div>
        <input
          id="etc"
          value="etc"
          type="radio"
          onChange={onChange}
          checked={value === "etc"}
        />
        기타사항
      </label>
      {value === "etc" && <LocationOpt type="etc" />}
    </div>
  );
};

export default Location;

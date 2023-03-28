import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./AddAddressNormalReq.module.css";

const AddAddressNormalReq = () => {
  const [value, setValue] = useState("door");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  console.log(value);
  return (
    <div>
      <div className={styles["message"]}>
        사회적 거리두기를 위해, 모든 배송을 비대면으로 진행합니다.
        <br />
        ‘직접 받고 부재 시 문 앞’을 선택해도 문 앞으로 배송합니다.
      </div>
      <div className={styles["location"]}>
        <label htmlFor="door">
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

        <label htmlFor="door_absence">
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

        <label htmlFor="security_office">
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

        <label htmlFor="delivery_box">
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
        <div className={styles["opt"]}>
          로켓배송에만 사용됩니다.
          <div className={styles["input__box"]}>
            <motion.p
              animate={{
                top: value === "delivery_box" ? "-0.3rem" : "0.5rem",
                fontSize: value === "delivery_box" ? "0.5rem" : "1.5rem",
              }}
              transition={{ duration: 0.15 }}
              className={styles["test2"]}
            >
              택배함 번호 (필수)
            </motion.p>
            <input />
          </div>
        </div>

        <label htmlFor="etc">
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
      </div>
    </div>
  );
};

export default AddAddressNormalReq;

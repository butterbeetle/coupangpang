import styles from "./BodyOpt.module.css";
import { useState } from "react";
const BodyOpt = () => {
  const [value, setValue] = useState("common");
  const onClick = (e) => {
    setValue(e);
  };
  return (
    <div className={styles["door__opt"]}>
      <label className={styles["common"]} onClick={() => onClick("common")}>
        <div
          className={`${styles["big__circle"]} ${
            value === "common" ? styles["big__select"] : ""
          }`}
        >
          <div
            className={`${styles["small__circle"]} ${
              value === "common" ? styles["small__select"] : ""
            }`}
          />
        </div>
        공동현관 출입번호
      </label>
      {value === "common" && (
        <div className={styles["common__opt"]}>
          <input
            type="text"
            placeholder="예 : #1234*, 열쇠#707@1234"
            maxLength={50}
          />
          <p className={styles["required"]}>필수 입력 사항입니다.</p>
          <p className={styles["length"]}>0/50</p>
        </div>
      )}

      <label className={styles["security"]} onClick={() => onClick("security")}>
        <div
          className={`${styles["big__circle"]} ${
            value === "security" ? styles["big__select"] : ""
          }`}
        >
          <div
            className={`${styles["small__circle"]} ${
              value === "security" ? styles["small__select"] : ""
            }`}
          />
        </div>
        경비실 호출
      </label>

      <label
        className={styles["generation"]}
        onClick={() => onClick("generation")}
      >
        <div
          className={`${styles["big__circle"]} ${
            value === "generation" ? styles["big__select"] : ""
          }`}
        >
          <div
            className={`${styles["small__circle"]} ${
              value === "generation" ? styles["small__select"] : ""
            }`}
          />
        </div>
        세대 호출
      </label>
      {value === "generation" && (
        <div className={styles["generation__opt"]}>
          자정부터 호출 가능성이 있습니다.
        </div>
      )}

      <label className={styles["free"]} onClick={() => onClick("free")}>
        <div
          className={`${styles["big__circle"]} ${
            value === "free" ? styles["big__select"] : ""
          }`}
        >
          <div
            className={`${styles["small__circle"]} ${
              value === "free" ? styles["small__select"] : ""
            }`}
          />
        </div>
        자유 출입가능
      </label>
    </div>
  );
};

export default BodyOpt;

import { useState } from "react";
import styles from "./Opt.module.css";

const Opt = () => {
  const [value, setValue] = useState("pw");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onClick = () => {
    setValue("pw");
  };
  return (
    <div className={styles["opt"]}>
      <h2>공동현관 출입번호</h2>
      <label className={styles["pw"]} htmlFor="pw">
        <div
          className={`${styles["big__circle"]} ${
            value === "pw" ? styles["big__select"] : ""
          }`}
        >
          <div
            className={`${styles["small__circle"]} ${
              value === "pw" ? styles["small__select"] : ""
            }`}
          />
        </div>
        <input
          id="pw"
          value="pw"
          type="radio"
          onChange={onChange}
          checked={value === "pw"}
        />
        <input
          onClick={onClick}
          className={styles["text"]}
          type="text"
          placeholder="예 : #1234"
        />
      </label>

      <label className={styles["pw__none"]} htmlFor="pw__none">
        <div
          className={`${styles["big__circle"]} ${
            value === "pw__none" ? styles["big__select"] : ""
          }`}
        >
          <div
            className={`${styles["small__circle"]} ${
              value === "pw__none" ? styles["small__select"] : ""
            }`}
          />
        </div>
        <input
          id="pw__none"
          value="pw__none"
          type="radio"
          onChange={onChange}
          checked={value === "pw__none"}
        />
        비밀번호없이 출입 가능해요
      </label>
      <p>
        입력된 공동현관 출입번호는 쿠팡이 로켓배송을 위해 필요한 정보로, 향후
        배송을 위해 필요한 기간 동안 보관하는데 동의합니다.
      </p>
    </div>
  );
};

export default Opt;

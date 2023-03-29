import styles from "./LocationOpt.module.css";

/* Animation */
import { motion } from "framer-motion";
import useInput from "../../../../hooks/useInput";
const LocationOpt = ({ type }) => {
  const { click, clickHandler, blurHandler } = useInput();

  let msg =
    type === "delivery_box"
      ? "로켓배송에만 사용됩니다."
      : "소화전/EPS/TPS 등은 안전상 보관 불가";

  let placeholder =
    type === "delivery_box" ? "택배함 번호 (필수)" : "장소만 입력 (필수)";

  return (
    <div className={styles["opt"]}>
      <p className={styles["opt__text"]}>{msg}</p>
      <motion.p
        initial={{
          top: "2.7rem",
          left: "1.9rem",
          fontSize: "0.85rem",
        }}
        animate={{
          top: click ? "2.3rem" : "2.7rem",
          fontSize: click ? "0.75rem" : "0.85rem",
        }}
        transition={{
          duration: 0.1,
        }}
        className={styles["placeholder"]}
      >
        {placeholder}
      </motion.p>
      {click && <p className={styles["length"]}>0/50</p>}
      <label className={styles["opt__label"]}>
        <input type="text" onClick={clickHandler} onBlur={blurHandler} />
      </label>
    </div>
  );
};

export default LocationOpt;

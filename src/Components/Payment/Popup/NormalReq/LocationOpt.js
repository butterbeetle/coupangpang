import styles from "./LocationOpt.module.css";

/* Animation */
import { motion } from "framer-motion";
/* Hook */
import useInput from "../../../../hooks/useInput";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addrActions } from "../../../../store/address-slice";

const LocationOpt = ({ type }) => {
  const dispatch = useDispatch();
  const { delivaryNormalReq } = useSelector((state) => state.addr);
  const { click, touched, clickHandler, blurHandler } = useInput();
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (touched && value.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  }, [touched, value]);

  useEffect(() => {
    if (delivaryNormalReq === "error") {
      setError(true);
    }
  }, [delivaryNormalReq]);

  const onBlur = (e) => {
    dispatch(
      addrActions.setAddr({
        delivaryNormalReq: e.target.value,
      })
    );
    blurHandler();
  };

  let msg =
    type === "delivery_box"
      ? "로켓배송에만 사용됩니다."
      : "소화전/EPS/TPS 등은 안전상 보관 불가";

  let placeholder =
    type === "delivery_box" ? "택배함 번호 (필수)" : "장소만 입력 (필수)";

  return (
    <div className={styles["opt"]}>
      <p className={styles["opt__text"]}>{msg}</p>
      <label
        className={`${styles["opt__label"]}
      ${error ? styles["error_border"] : ""}
      `}
      >
        <input
          type="text"
          onClick={clickHandler}
          onBlur={onBlur}
          maxLength="50"
          onChange={onChange}
        />
      </label>
      <motion.p
        initial={{
          top: "2.7rem",
          left: "1.9rem",
          fontSize: "0.85rem",
        }}
        animate={{
          top: click || value.length > 0 ? "2.3rem" : "2.7rem",
          fontSize: click || value.length > 0 ? "0.75rem" : "0.85rem",
        }}
        transition={{
          duration: 0.05,
        }}
        className={`${styles["placeholder"]}
        
        ${click ? styles["click_text"] : ""}
        ${error ? styles["error_text"] : ""}
        `}
      >
        {placeholder}
      </motion.p>
      {click && <p className={styles["length"]}>{value.length}/50</p>}
      {error && <p className={styles["error"]}>내용을 입력해주세요.</p>}
    </div>
  );
};

export default LocationOpt;

import styles from "./BodyOpt.module.css";
import { useEffect, useState } from "react";
import BodyInput from "./BodyInput";
import { useDispatch, useSelector } from "react-redux";
import { addrActions } from "../../../../../store/address-slice";
const BodyOpt = () => {
  const dispatch = useDispatch();
  const { delivaryDawnReq } = useSelector((state) => state.addr);
  const [value, setValue] = useState("common");
  const [error, setError] = useState(false);
  const onClick = (e) => {
    setValue(e);
    if (e !== "common") {
      setError(false);
    }
  };
  useEffect(() => {
    dispatch(
      addrActions.setAddr({
        delivaryDawnReq:
          value === "security"
            ? "경비실 호출"
            : value === "generation"
            ? "세대 호출"
            : value === "free"
            ? "자유 출입가능"
            : "",
      })
    );
  }, [dispatch, value]);

  useEffect(() => {
    if (delivaryDawnReq === "error") {
      setError(true);
    }
  }, [delivaryDawnReq]);

  return (
    <div className={styles["door__opt"]}>
      <label
        className={`${styles["common"]}
        ${error ? styles["error_text"] : styles["none_text"]}`}
        onClick={() => onClick("common")}
      >
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
        <BodyInput
          ph={"예 : #1234*, 열쇠#707@1234"}
          error={error}
          setError={setError}
        />
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

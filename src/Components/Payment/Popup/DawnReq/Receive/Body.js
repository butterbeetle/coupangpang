import styles from "./Body.module.css";
import { useState } from "react";
import BodyOpt from "./BodyOpt";
import { useDispatch } from "react-redux";
import { addrActions } from "../../../../../store/address-slice";
const Body = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("door");
  const onClick = (e) => {
    setValue(e);
    console.log(e);
    dispatch(
      addrActions.setAddr({
        delivaryDawn:
          e === "door" ? "문 앞" : e === "delivery" ? "택배함" : "기타사항",
      })
    );
  };
  return (
    <div className={styles["receive__body"]}>
      <label className={styles["door"]} onClick={() => onClick("door")}>
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
        문 앞
      </label>
      {value === "door" && <BodyOpt />}

      <label className={styles["delivery"]} onClick={() => onClick("delivery")}>
        <div
          className={`${styles["big__circle"]} ${
            value === "delivery" ? styles["big__select"] : ""
          }`}
        >
          <div
            className={`${styles["small__circle"]} ${
              value === "delivery" ? styles["small__select"] : ""
            }`}
          />
        </div>
        택배함
      </label>

      <label className={styles["etc"]} onClick={() => onClick("etc")}>
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
        기타사항
      </label>
    </div>
  );
};

export default Body;

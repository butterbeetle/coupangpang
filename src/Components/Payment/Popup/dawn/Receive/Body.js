import styles from "./Body.module.css";
import { useEffect, useState } from "react";
import BodyOpt from "./BodyOpt";
import { useDispatch, useSelector } from "react-redux";
import { addrActions } from "../../../../../store/address-slice";
import BodyInput from "./BodyInput";
const Body = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("door");
  const [error, setError] = useState(false);
  const { delivaryDawnReq } = useSelector((state) => state.addr);
  const onClick = (e) => {
    setValue(e);
    setError(false);
    dispatch(
      addrActions.setAddr({
        delivaryDawn:
          e === "door" ? "문 앞" : e === "delivery" ? "택배함" : "기타사항",
      })
    );
  };

  useEffect(() => {
    dispatch(
      addrActions.setAddr({
        delivaryDawn: "문 앞",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    if (delivaryDawnReq === "error") {
      setError(true);
    }
  }, [delivaryDawnReq]);

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
      {value === "delivery" && (
        <BodyInput ph={"예 : 택배함 번호"} error={error} setError={setError} />
      )}

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
      {value === "etc" && (
        <BodyInput
          ph={"기타 수령방법을 입력해 주세요."}
          error={error}
          setError={setError}
        />
      )}
    </div>
  );
};

export default Body;

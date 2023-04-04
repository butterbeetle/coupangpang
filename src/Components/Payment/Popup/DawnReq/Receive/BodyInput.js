import styles from "./BodyInput.module.css";
import useInput from "../../../../../hooks/useInput";
import { useState } from "react";

const BodyInput = ({ ph, error, setError }) => {
  const { click, clickHandler, blurHandler } = useInput();
  const [value, setValue] = useState("");
  const onClick = () => {
    clickHandler();
    setError(false);
  };
  const onBlur = () => {
    blurHandler();
    if (value.length > 0) {
      setError(false);
    } else {
      setError(true);
    }
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles["common__opt"]}>
      <input
        className={`${styles["input"]} ${
          error ? styles["error"] : styles["none"]
        }`}
        onChange={onChange}
        type="text"
        placeholder={ph}
        maxLength={50}
        onClick={onClick}
        onBlur={onBlur}
      />
      {!click && value.length === 0 && (
        <p
          className={`${styles["required"]} ${
            error ? styles["error_text"] : styles["none_text"]
          }`}
        >
          필수 입력 사항입니다.
        </p>
      )}
      {click && <p className={styles["length"]}>{value.length}/50</p>}
    </div>
  );
};

export default BodyInput;

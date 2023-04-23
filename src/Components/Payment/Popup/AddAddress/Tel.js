import styles from "./Tel.module.css";
/* Hook */
import useInput from "../../../../hooks/useInput";

/* Icon */
import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall";
import { AiOutlineMinus } from "@react-icons/all-files/ai/AiOutlineMinus";

const Tel = ({ register, errors, onClose }) => {
  const {
    click: telClick,
    clickHandler: telClickHandler,
    blurHandler: telBlurHandler,
  } = useInput();

  return (
    <div
      className={`${styles["input__box"]} ${
        errors ? styles["error__border"] : ""
      }`}
    >
      <div className={styles["icon__box"]}>
        <FiPhoneCall />
      </div>
      <label htmlFor="tel" onClick={telClickHandler} onBlur={telBlurHandler}>
        <input
          id="tel"
          type="text"
          placeholder={telClick ? "" : "연락처"}
          {...register}
        />
        <AiOutlineMinus title="연락처 삭제" onClick={onClose} />
      </label>
      {errors && (
        <span className={styles["error__message"]}>{errors.message}</span>
      )}
    </div>
  );
};

export default Tel;

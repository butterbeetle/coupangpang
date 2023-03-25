import styles from "./AddAddressPhone.module.css";

/* Icon */
import { FiSmartphone } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

/* Hook */
import useInput from "../../../hooks/useInput";

const AddAddressPhone = ({ register, errors }) => {
  const {
    click: phoneClick,
    clickHandler: phoneClickHandler,
    blurHandler: phoneBlurHandler,
  } = useInput();

  return (
    <div
      className={`${styles["input__box"]} ${
        errors ? styles["error__border"] : ""
      }`}
    >
      <div className={styles["icon__box"]}>
        <FiSmartphone />
      </div>
      <label
        htmlFor="phone"
        onClick={phoneClickHandler}
        onBlur={phoneBlurHandler}
      >
        <input
          id="phone"
          type="text"
          placeholder={phoneClick ? "" : "휴대폰 번호"}
          {...register}
        />
        <AiOutlinePlus title="연락처 추가" />
      </label>
      {errors && (
        <span className={styles["error__message"]}>{errors.message}</span>
      )}
    </div>
  );
};

export default AddAddressPhone;

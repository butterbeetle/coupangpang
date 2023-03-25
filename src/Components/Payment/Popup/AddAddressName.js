import styles from "./AddAddressName.module.css";
/* Hook */
import useInput from "../../../hooks/useInput";
/* Icon */
import { FaRegUser } from "react-icons/fa";
const AddAddressName = ({ register, errors }) => {
  const {
    click: nameClick,
    clickHandler: nameClickHandler,
    blurHandler: nameBlurHandler,
  } = useInput();

  return (
    <div
      className={`${styles["input__box"]} ${
        errors ? styles["error__border"] : ""
      }`}
    >
      <div className={styles["icon__box"]}>
        <FaRegUser />
      </div>
      <label htmlFor="name" onClick={nameClickHandler} onBlur={nameBlurHandler}>
        <input
          id="name"
          type="text"
          placeholder={nameClick ? "" : "받는 사람"}
          {...register}
        />
      </label>
      {errors && (
        <span className={styles["error__message"]}>{errors.message}</span>
      )}
    </div>
  );
};

export default AddAddressName;

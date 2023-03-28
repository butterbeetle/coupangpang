import styles from "./AddAddressPhone.module.css";

/* Icon */
import { FiSmartphone } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

/* Hook */
import useInput from "../../../hooks/useInput";

const AddAddressPhone = ({
  register,
  errors,
  setValue,
  getValues,
  openTel,
  onOpen,
}) => {
  const {
    click: phoneClick,
    touched: phoneTouched,
    clickHandler: phoneClickHandler,
    blurHandler: phoneBlurHandler,
  } = useInput();

  const phoneBlur = (e) => {
    phoneBlurHandler();
    const value = getValues;
    if (phoneTouched && !errors) {
      setValue("phone", value.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
    }
  };

  return (
    <div
      className={`${styles["input__box"]} ${
        errors ? styles["error__border"] : ""
      }`}
    >
      <div className={styles["icon__box"]}>
        <FiSmartphone />
      </div>
      <label htmlFor="phone" onClick={phoneClickHandler} onBlur={phoneBlur}>
        <input
          id="phone"
          type="text"
          placeholder={phoneClick ? "" : "휴대폰 번호"}
          {...register}
        />
        {!openTel && <AiOutlinePlus title="연락처 추가" onClick={onOpen} />}
      </label>
      {errors && (
        <span className={styles["error__message"]}>{errors.message}</span>
      )}
    </div>
  );
};

export default AddAddressPhone;

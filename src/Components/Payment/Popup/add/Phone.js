import styles from "./Phone.module.css";

/* Icon */
import { FiSmartphone } from "@react-icons/all-files/fi/FiSmartphone";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";

/* Hook */
import useInput from "../../../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { addrActions } from "../../../../store/address-slice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Phone = ({
  register,
  errors,
  value,
  setValue,
  openTel,
  openTelHandler,
}) => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const phone = useSelector((state) => state.addr.phone);

  const {
    click: phoneClick,
    clickHandler: phoneClickHandler,
    blurHandler: phoneBlurHandler,
  } = useInput();

  const blurHandler = () => {
    phoneBlurHandler();
    // if (!errors && value) {
    //   setValue("phone", value.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
    // }
    dispatch(
      addrActions.setAddr({
        phone: value,
      })
    );
  };

  useEffect(() => {
    if (state.phone) {
      setValue("phone", state.phone);
    }
  }, [setValue, state.phone]);

  return (
    <div
      className={`${styles["input__box"]} ${
        errors ? styles["error__border"] : ""
      }`}
    >
      <div className={styles["icon__box"]}>
        <FiSmartphone />
      </div>
      <label htmlFor="phone" onClick={phoneClickHandler} onBlur={blurHandler}>
        <input
          id="phone"
          type="text"
          value={value ? value : phone}
          placeholder={phoneClick ? "" : "휴대폰 번호"}
          {...register}
        />
        {!openTel && (
          <AiOutlinePlus title="연락처 추가" onClick={openTelHandler} />
        )}
      </label>
      {errors && (
        <span className={styles["error__message"]}>{errors.message}</span>
      )}
    </div>
  );
};

export default Phone;

import styles from "./Name.module.css";
/* Hook */
import useInput from "../../../../hooks/useInput";
/* Icon */
import { FaRegUser } from "@react-icons/all-files/fa/FaRegUser";
import { useDispatch, useSelector } from "react-redux";
import { addrActions } from "../../../../store/address-slice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Name = ({ register, value, errors, setValue }) => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const name = useSelector((state) => state.addr.name);

  const {
    click: nameClick,
    clickHandler: nameClickHandler,
    blurHandler: nameBlurHandler,
  } = useInput();

  const blurHandler = () => {
    nameBlurHandler();
    dispatch(
      addrActions.setAddr({
        name: value,
      })
    );
  };

  useEffect(() => {
    if (state.name) {
      setValue("name", state.name);
    }
  }, [setValue, state.name]);

  return (
    <div
      className={`${styles["input__box"]} ${
        errors ? styles["error__border"] : ""
      }`}
    >
      <div className={styles["icon__box"]}>
        <FaRegUser />
      </div>
      <label htmlFor="name" onClick={nameClickHandler} onBlur={blurHandler}>
        <input
          id="name"
          type="text"
          value={value ? value : name}
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

export default Name;

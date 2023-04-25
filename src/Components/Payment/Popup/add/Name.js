import styles from "./Name.module.css";
/* Hook */
import useInput from "../../../../hooks/useInput";
/* Icon */
import { FaRegUser } from "@react-icons/all-files/fa/FaRegUser";
import { useDispatch, useSelector } from "react-redux";
import { addrActions } from "../../../../store/address-slice";

const Name = ({ register, value, errors }) => {
  const dispatch = useDispatch();
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

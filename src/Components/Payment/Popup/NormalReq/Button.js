import styles from "./Button.module.css";

/* Redux */
import { useDispatch } from "react-redux";
import { popupActions } from "../../../../store/popup-slice";
const Button = () => {
  const dispatch = useDispatch();
  const onClick = (e) => {
    dispatch(popupActions.move(e));
  };
  return (
    <button
      className={styles["button"]}
      type="button"
      onClick={() => onClick("add")}
    >
      동의하고 저장하기
    </button>
  );
};

export default Button;

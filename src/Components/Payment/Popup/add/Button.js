import { useDispatch, useSelector } from "react-redux";
import styles from "./Button.module.css";
/* Hook */
import { useLocation, useNavigate } from "react-router-dom";
import { addrActions } from "../../../../store/address-slice";

const Button = ({ setValue, handleSubmit }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addrData = useSelector((state) => state.addr);

  const removeAddr = () => {
    dispatch(addrActions.removeAddr(state?.id));
    dispatch(addrActions.reset());
    setValue("name", "");
    setValue("phone", "");
    navigate("/addressbook/show");
  };

  return (
    <div>
      <button className={styles["button"]} type="submit">
        저장
      </button>
      {state?.id && (
        <button
          className={`${styles["button"]} ${styles["delete"]}`}
          onClick={handleSubmit(removeAddr)}
          type="submit"
        >
          삭제
        </button>
      )}
    </div>
  );
};

export default Button;

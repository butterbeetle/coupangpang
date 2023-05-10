import styles from "./Button.module.css";
/* Hook */
import { useLocation, useNavigate } from "react-router-dom";
import { addrActions } from "../../../../store/address-slice";
import { useCallback, useEffect, useState } from "react";
/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { sendAddrData } from "../../../../store/address-action";
/* Util */
import LoadingSpinner from "../../../../Util/Loading";

const Button = ({ setValue, handleSubmit }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const addrData = useSelector((state) => state.addr);

  const removeAddr = () => {
    dispatch(addrActions.removeAddr(state?.id));
    setLoading((prev) => !prev);
  };

  const moveTo2Sec = useCallback(() => {
    setLoading((prev) => !prev);

    dispatch(sendAddrData(addrData.data));
    dispatch(addrActions.reset());
    setValue("name", "");
    setValue("phone", "");

    if (!addrData.data.length) {
      navigate("/addressbook/add");
    } else {
      navigate("/addressbook/show");
    }
  }, [dispatch, navigate, addrData, setValue]);

  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(moveTo2Sec, 2000);
      return () => clearTimeout(timeout);
    }
  }, [loading, moveTo2Sec]);

  return (
    <div>
      {loading && (
        <div className={styles["loading"]}>
          <LoadingSpinner />
        </div>
      )}
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

import styles from "./Button.module.css";

import { useDispatch, useSelector } from "react-redux";
import { popupActions } from "../../../../store/popup-slice";
import { addrActions } from "../../../../store/address-slice";

const Button = () => {
  const dispatch = useDispatch();
  const { delivaryDawnReq } = useSelector((state) => state.addr);
  const onClick = (e) => {
    if (delivaryDawnReq.length > 0 && delivaryDawnReq !== "error") {
      dispatch(popupActions.move(e));
    } else {
      dispatch(
        addrActions.setAddr({
          delivaryDawnReq: "error",
        })
      );
    }
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

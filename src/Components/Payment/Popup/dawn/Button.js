import styles from "./Button.module.css";

import { useDispatch, useSelector } from "react-redux";
import { addrActions } from "../../../../store/address-slice";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { delivaryDawnReq } = useSelector((state) => state.addr);
  const onClick = () => {
    if (delivaryDawnReq.length > 0 && delivaryDawnReq !== "error") {
      navigator("/addressbook/add");
    } else {
      dispatch(
        addrActions.setAddr({
          delivaryDawnReq: "error",
        })
      );
    }
  };

  return (
    <button className={styles["button"]} type="button" onClick={onClick}>
      동의하고 저장하기
    </button>
  );
};

export default Button;

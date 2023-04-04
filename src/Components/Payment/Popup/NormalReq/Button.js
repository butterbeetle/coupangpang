import styles from "./Button.module.css";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { popupActions } from "../../../../store/popup-slice";
import { addrActions } from "../../../../store/address-slice";
const Button = () => {
  const dispatch = useDispatch();
  const { delivaryNormal, delivaryNormalReq } = useSelector(
    (state) => state.addr
  );
  const onClick = (e) => {
    if (delivaryNormal === "택배함" || delivaryNormal === "기타사항") {
      if (delivaryNormalReq.length > 0 && delivaryNormalReq !== "error") {
        dispatch(popupActions.move(e));
      } else {
        dispatch(
          addrActions.setAddr({
            delivaryNormalReq: "error",
          })
        );
      }
    } else {
      dispatch(popupActions.move(e));
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

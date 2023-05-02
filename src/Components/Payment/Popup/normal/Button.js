import styles from "./Button.module.css";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { addrActions } from "../../../../store/address-slice";
import { useLocation, useNavigate } from "react-router-dom";
const Button = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { delivaryNormal, delivaryNormalReq } = useSelector(
    (state) => state.addr
  );
  const onClick = (e) => {
    if (delivaryNormal === "택배함" || delivaryNormal === "기타사항") {
      if (delivaryNormalReq.length > 0 && delivaryNormalReq !== "error") {
        if (state) {
          console.log(state.id);
          navigator(`/addressbook/add`);
        } else {
          navigator(`/addressbook/add`);
        }
      } else {
        dispatch(
          addrActions.setAddr({
            delivaryNormalReq: "error",
          })
        );
      }
    } else {
      if (state) {
        navigator(`/addressbook/add`);
      } else {
        navigator(`/addressbook/add`);
      }
    }
  };

  return (
    <button className={styles["button"]} type="button" onClick={onClick}>
      동의하고 저장하기
    </button>
  );
};

export default Button;

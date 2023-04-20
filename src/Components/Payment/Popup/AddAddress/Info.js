import styles from "./Info.module.css";
/* Icon */
import { BsChatLeftDots } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { popupActions } from "../../../../store/popup-slice";

const Info = () => {
  const dispatch = useDispatch();
  const { delivaryNormal, delivaryNormalReq, delivaryDawn, delivaryDawnReq } =
    useSelector((state) => state.addr);

  const onClick = (e) => {
    dispatch(popupActions.move(e));
  };

  let norInfo = delivaryNormal ? (
    <p className={styles["norInfo"]}>{`일반 : ${delivaryNormal} ${
      delivaryNormal === "택배함" || delivaryNormal === "기타사항"
        ? `(${delivaryNormalReq})`
        : ""
    }`}</p>
  ) : (
    <p>일반배송 정보를 선택해 주세요.</p>
  );

  let dawnInfo = delivaryDawn ? (
    <p className={styles["norInfo"]}>{`일반 : ${delivaryDawn} ${
      delivaryDawn === "문 앞" ? `(${delivaryDawnReq})` : ""
    }`}</p>
  ) : (
    <p>새벽배송 정보를 선택해 주세요.</p>
  );

  return (
    <div className={styles["input__box"]}>
      <div className={styles["icon__box"]}>
        <BsChatLeftDots />
      </div>
      <div className={styles["info__box"]}>
        <div
          className={styles["info__normal"]}
          onClick={() => onClick("normal")}
        >
          {norInfo}
          <RiArrowRightSLine />
        </div>
        <div className={styles["info__dawn"]} onClick={() => onClick("dawn")}>
          {dawnInfo}
          <RiArrowRightSLine />
        </div>
      </div>
    </div>
  );
};

export default Info;

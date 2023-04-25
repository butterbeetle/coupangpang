import styles from "./Info.module.css";
/* Icon */
import { BsChatDots } from "@react-icons/all-files/bs/BsChatDots";
import { RiArrowRightSLine } from "@react-icons/all-files/ri/RiArrowRightSLine";
/* Redux */
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigator = useNavigate();
  const { delivaryNormal, delivaryNormalReq, delivaryDawn, delivaryDawnReq } =
    useSelector((state) => state.addr);

  const onClick = (e) => {
    navigator(`/addressbook/${e}`);
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
    <p
      className={styles["norInfo"]}
    >{`새벽 : ${delivaryDawn} ${`(${delivaryDawnReq})`}`}</p>
  ) : (
    <p>새벽배송 정보를 선택해 주세요.</p>
  );

  return (
    <div className={styles["input__box"]}>
      <div className={styles["icon__box"]}>
        <BsChatDots />
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

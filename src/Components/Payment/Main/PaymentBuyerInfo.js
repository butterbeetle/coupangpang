import { useSelector } from "react-redux";
import styles from "./PaymentBuyerInfo.module.css";
/* Util */
import { phoneFormat } from "../../../Util/format";

const PaymentBuyerInfo = () => {
  const userData = useSelector((state) => state.logged.user);

  return (
    <div className={styles["content"]}>
      <div className={styles["title"]}>
        <h3>구매자정보</h3>
      </div>
      <div className={styles["customer"]}>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>이름</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              {userData.name}
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>이메일</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              {userData.email}
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>휴대폰 번호</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              {phoneFormat(userData.phone)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBuyerInfo;

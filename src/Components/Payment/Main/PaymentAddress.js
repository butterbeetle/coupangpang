import styles from "./PaymentAddress.module.css";
import { BsCheck } from "react-icons/bs";
const PaymentAddress = () => {
  return (
    <div className={styles["content"]}>
      <div className={styles["title"]}>
        <h3>받는사람정보</h3>
      </div>
      <div className={styles["customer"]}>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>이름</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              김승회
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>배송주소</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              butterbeetle@naver.com
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>연락처</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              010-8611-9303
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>
            <BsCheck className={styles["check"]} />
            배송 요청사항
          </div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              직접 받고 부재 시 문 앞
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentAddress;

import styles from "./PaymentBuyerInfo.module.css";

const PaymentBuyerInfo = () => {
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
              김승회
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>이메일</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              butterbeetle@naver.com
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>휴대폰 번호</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              010-8611-9303
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBuyerInfo;

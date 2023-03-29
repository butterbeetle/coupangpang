import styles from "./PaymentDelivary.module.css";

const PaymentDelivary = () => {
  return (
    <div className={styles["content"]}>
      <div className={styles["title"]}>
        <h3>배송 1건 중 1</h3>
      </div>
      <div className={styles["customer"]}>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>
            <strong>토요일 3/25 </strong>도착 예정
          </div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["prod__title"]}>
              360도 회전가능한 마그네틱 자석 휴대폰 고속 충전 케이블, C타입,
              레드
            </div>
            <div className={styles["prod__quantity"]}>수량 1개 / 무료배송</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDelivary;

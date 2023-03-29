import styles from "./PaymentButton.module.css";

const PaymentButton = () => {
  return (
    <div>
      <div className={styles["desc"]}>
        <p>구매조건 확인 및 결제대행 서비스 약관 동의</p>
        <p>보기</p>
      </div>
      <div className={styles["message"]}>
        위 주문 내용을 확인 하였으며, 회원 본인은 개인정보 이용 및
        제공(해외직구의 경우 국외제공) 및 결제에 동의합니다.
      </div>
      <div className={styles["button"]}>
        <button>결제하기</button>
      </div>
    </div>
  );
};

export default PaymentButton;

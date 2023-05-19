import { useEffect } from "react";
import styles from "./PaymentButton.module.css";

const PaymentButton = () => {
  useEffect(() => {
    const jqry = document.createElement("script");
    jqry.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.2.0.js";
    document.head.appendChild(jqry);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jqry);
      document.head.removeChild(iamport);
    };
  }, []);

  const callback = (res) => {
    const {
      success,
      error_msg,
      imp_uid,
      merchant_uid,
      pay_method,
      paid_amount,
      status,
    } = res;

    if (success) {
      console.log(
        "결제 성공",
        imp_uid,
        merchant_uid,
        pay_method,
        paid_amount,
        status
      );
    } else {
      console.log(`결제 실패: ${error_msg}`);
    }
  };

  const onClickPayment = () => {
    const { IMP } = window;
    /* Import 관리자 페이지 > 내 정보 > 가맹점 식별 코드 */
    IMP.init("imp61877428");

    const data = {
      // pg: "kakaopay.TC0ONETIME",
      // pg: "tosspay.tosstest",
      pg: "kicc.T5102001",
      pay_method: "card",
      merchant_uid: "IMP" + new Date().getTime(),
      name: "KG이니시스: 당근 20kg",
      amount: 100,
      buyer_email: "Iamport@chai.finance",
      buyer_name: "아임포트 기술지원팀",
      buyer_tel: "010-1234-5678",
      buyer_addr: "서울특별시 강남구 삼성동",
      buyer_postcode: "123-456",
    };

    IMP.request_pay(data, callback);
  };
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

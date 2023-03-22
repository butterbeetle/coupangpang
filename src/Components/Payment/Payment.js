import { resolveMotionValue } from "framer-motion";
import { useEffect } from "react";
import styles from "./Payment.module.css";

const Payment = () => {
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
    } = resolveMotionValue;

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
    IMP.init("imp61877428");

    const data = {
      pg: "coupang",
      pay_method: "card",
      merchant_uid: "merchant_" + new Date().getTime(),
      name: "쿠팡 테스트",
      amount: 100,
      buyer_email: "gildong@gmail.com",
      buyer_name: "홍길동",
      buyer_tel: "010-4242-4242",
      buyer_addr: "서울특별시 강남구 신사동",
      buyer_postcode: "01181",
    };

    IMP.request_pay(data, callback);
  };

  return (
    <div>
      Payment Page
      <button type="button" onClick={onClickPayment}>
        클릭!
      </button>
    </div>
  );
};

export default Payment;

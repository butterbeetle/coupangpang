import styles from "./PaymentButton.module.css";
/* Hook */
import { useEffect } from "react";
/* Redux */
import { useSelector } from "react-redux";

const KAKAOPAY = "kakaopay.TC0ONETIME"; // 카카오페이
const TOSPAY = "tosspay.tosstest"; // 토스페이
const KICC = "kicc.T5102001"; // 신용카드
const CARD = "card"; // 신용카드
const VBANK = "vbank"; // 무통장입금(가상계좌)
const TRANS = "trans"; // 계좌이체

const PaymentButton = () => {
  const userData = useSelector((state) => state.logged.user);
  const curItems = useSelector((state) => state.buy.currentItems);
  const checked = useSelector((state) => state.cart.checked);
  const name = `${curItems.items[0]?.name.slice(0, 35)}${
    checked?.length > 1 ? "... 외 " + (checked?.length - 1) + "개" : "..."
  }`;
  const amount = curItems.items?.reduce(
    (acc, cur) => (acc += cur.totalPrice),
    0
  );

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

  const pgSelect = (pg) => {
    if (pg === "kakao") return KAKAOPAY;
    else if (pg === "toss") return TOSPAY;
    else return KICC;
  };
  const methodSelect = (method) => {
    if (method === "trans") return TRANS;
    else if (method === "vbank") return VBANK;
    else return CARD;
  };
  const phoneFormat = (phone) => {
    return phone.replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3");
  };
  const onClickPayment = () => {
    const { IMP } = window;
    /* Import 관리자 페이지 > 내 정보 > 가맹점 식별 코드 */
    IMP.init("imp61877428");

    const data = {
      pg: pgSelect(curItems.method),
      pay_method: methodSelect(curItems.method),
      merchant_uid: "IMP" + new Date().getTime(),
      name, // 최대 40글자
      amount, // 총 가격
      // buyer_email: "Iamport@chai.finance", // 이메일 => 필수가 아니다?
      buyer_name: curItems.addr.name, // 이름
      buyer_tel: phoneFormat(curItems.addr.phone), // 전번
      buyer_addr: curItems.addr.roadAddress, // 주소
      buyer_postcode: curItems.addr.zonecode, // 우편번호
    };

    IMP.request_pay(data, callback);
  };

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

  // console.log("userData", userData);
  // console.log("currentItem addr", curItems.addr);
  // console.log("currentItem items", curItems.items);
  // console.log("currentItem method", curItems.method);
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
        <button onClick={onClickPayment}>결제하기</button>
      </div>
    </div>
  );
};

export default PaymentButton;

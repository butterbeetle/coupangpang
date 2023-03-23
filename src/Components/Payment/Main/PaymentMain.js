import PaymentBuyerInfo from "./PaymentBuyerInfo";
import PaymentTitle from "./PaymentTitle";
import PaymentAddress from "./PaymentAddress";
import PaymentPay from "./PaymentPay";
import PaymentDelivary from "./PaymentDelivary";
import PaymentButton from "./PaymentButton";

const PaymentMain = () => {
  return (
    <div>
      <PaymentTitle />
      <PaymentBuyerInfo />
      <PaymentAddress />
      <PaymentDelivary />
      <PaymentPay />
      <PaymentButton />
    </div>
  );
};

export default PaymentMain;

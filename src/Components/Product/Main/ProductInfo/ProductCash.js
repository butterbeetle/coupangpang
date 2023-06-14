import styles from "./ProductCash.module.css";
/* Icon */
import { AiOutlineInfoCircle } from "@react-icons/all-files/ai/AiOutlineInfoCircle";
import { ImCoinDollar } from "@react-icons/all-files/im/ImCoinDollar";
import { useSelector } from "react-redux";
const ProductCash = () => {
  const prodDiscount = useSelector((state) => state.prod.discount) ?? 0;
  const { price } = useSelector((state) => state.prod.current);

  return (
    <div className={styles["product__info--cash"]}>
      <div className={styles["cash__header"]}>
        <div className={styles["cash__title"]}>
          <ImCoinDollar />
          <p>캐시적립 혜택</p>
          <AiOutlineInfoCircle />
        </div>
        <div>
          <p>
            최대
            <strong>
              {((price - price * prodDiscount * 0.01) * 0.01).toLocaleString()}
              원
            </strong>
            적립
          </p>
        </div>
      </div>
      <div className={styles["cash__promotion"]}>
        <p>쿠페이 머니 결제 시 1% 적립</p>
        {/* <p>[로켓와우 + 쿠페이 계좌이체] 결제 시 2% 적립</p>
<p>
  [로켓와우 + 쿠페이 머니] 결제 시 4% 추가적립{" "}
  <strong>2922일 남음</strong>
</p> */}
        <button type="button">쿠페이 머니 충전하기</button>
      </div>
    </div>
  );
};

export default ProductCash;

import { useSelector } from "react-redux";
import styles from "./ProductPrice.module.css";

import { AiOutlineInfo } from "@react-icons/all-files/ai/AiOutlineInfo";
import { ImCoinDollar } from "@react-icons/all-files/im/ImCoinDollar";

const ProductPrice = () => {
  const discount = useSelector((state) => state.prod.discount) ?? 0;
  const { price } = useSelector((state) => state.prod.current);

  return (
    <div className={styles["product__info--price"]}>
      {discount > 0 && (
        <div className={styles["price__discount"]}>
          <p className={styles["price__discount__rate"]}>{discount}%</p>
          <p className={styles["price__origin"]}>{price.toLocaleString()}원</p>
          <AiOutlineInfo />
        </div>
      )}
      {/* <div className={styles["price__sale"]}>
        <p className={styles["price__total"]}>{price.toLocaleString()}원</p>
        <p className={styles["price__info"]}>쿠팡판매가</p>
      </div> */}
      <div className={styles["price__coupon"]}>
        <p className={styles["price__total"]}>
          {(
            Math.round((price - price * discount * 0.01) / 10) * 10
          ).toLocaleString()}
          원
        </p>
        {/* <p className={styles["price__info"]}>와우할인가</p> */}
      </div>
      <div>
        <div className={styles["price__badge"]}>
          <ImCoinDollar />
          <p>
            최대{" "}
            {parseInt(
              (price - price * discount * 0.01) * 0.01
            ).toLocaleString()}
            원 적립
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPrice;

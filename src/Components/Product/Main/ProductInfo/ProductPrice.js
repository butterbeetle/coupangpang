import { useSelector } from "react-redux";
import styles from "./ProductPrice.module.css";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsCoin } from "react-icons/bs";

const ProductPrice = () => {
  const prodDiscount = useSelector((state) => state.prod.discount);
  const { price } = useSelector((state) => state.prod.current);

  return (
    <div className={styles["product__info--price"]}>
      <div className={styles["price__discount"]}>
        <p className={styles["price__discount__rate"]}>{prodDiscount}%</p>
        <p className={styles["price__origin"]}>{price.toLocaleString()}원</p>
        <AiOutlineInfoCircle />
      </div>
      <div className={styles["price__sale"]}>
        <p className={styles["price__total"]}>{price.toLocaleString()}원</p>
        <p className={styles["price__info"]}>쿠팡판매가</p>
      </div>
      <div className={styles["price__coupon"]}>
        <p className={styles["price__total"]}>
          {(price - price * prodDiscount * 0.01).toLocaleString()}원
        </p>
        <p className={styles["price__info"]}>와우할인가</p>
      </div>
      <div>
        <div className={styles["price__badge"]}>
          <BsCoin />
          <p>
            최대{" "}
            {parseInt(
              (price - price * prodDiscount * 0.01) * 0.01
            ).toLocaleString()}
            원 적립
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPrice;

import { useSelector } from "react-redux";
import styles from "./ProductHeader.module.css";
/* Icon */
import { GiShare } from "@react-icons/all-files/gi/GiShare";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";
const ProductHeader = () => {
  const prodTitle = useSelector((state) => state.prod.title);
  const prodReview = useSelector((state) => state.prod.review);

  return (
    <div className={styles["product__info--header"]}>
      <p className={styles["product__info--title"]}>{prodTitle}</p>
      {prodReview > 0 && (
        <div className={styles["review"]}>
          <span className={styles["empty-star"]}>
            <span className={styles["review-star"]} style={{ width: "80%" }} />
          </span>
          <span className={styles["review--count"]}>{prodReview}개 상품평</span>
        </div>
      )}
      <div className={styles["product__info--icon"]}>
        <div className={styles["heart"]}>
          <FiHeart className={styles["heart--icon"]} />
        </div>
        <div className={styles["share"]}>
          <GiShare className={styles["share--icon"]} />
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;

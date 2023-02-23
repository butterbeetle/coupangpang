import styles from "./Product.module.css";
// import { useParams } from "react-router";
import ProductImage from "./ProductImage";

const Product = () => {
  // const { productId } = useParams();

  return (
    <section className={styles["product"]}>
      <div className={styles["product__main"]}>
        <div className={styles["product__category"]}>
          {"쿠팡 홈 > 식품 > 채소"}
        </div>
        <div className={styles["product__info"]}>
          <ProductImage />
          <div className={styles["product__text"]}>text</div>
        </div>
      </div>
    </section>
  );
};

export default Product;

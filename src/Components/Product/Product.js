import styles from "./Product.module.css";

import ProductMain from "./Main/ProductMain";
import ProductTab from "./Tab/ProductTab";

const Product = () => {
  return (
    <section className={styles["product"]}>
      <div className={styles["main"]}>
        <ProductMain />
        <div>{/* 함께 비교하면 좋을 상품 */}</div>
        <ProductTab />
      </div>
    </section>
  );
};

export default Product;

import styles from "./ProductMain.module.css";
import ProductImage from "./ProductImage/ProductImage";
import ProductInfo from "./ProductInfo/ProductInfo";

const ProductMain = () => {
  return (
    <div className={styles["product__main"]}>
      {/* <div className={styles["product__category"]}>
        {"쿠팡 홈 > 식품 > 채소"}
      </div> */}
      <div className={styles["product__infos"]}>
        <ProductImage />
        <ProductInfo />
      </div>
    </div>
  );
};

export default ProductMain;

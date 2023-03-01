import styles from "./ProductTab.module.css";
import ProductTabMenu from "./ProductTabMenu";
import ProductTabContents from "./ProductTabContents";

const ProductTab = () => {
  return (
    <div className={styles["product__tab"]}>
      <ProductTabMenu />
      <ProductTabContents />
    </div>
  );
};

export default ProductTab;

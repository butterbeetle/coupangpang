import styles from "./ProductTab.module.css";
import ProductTabMenu from "./ProductTabMenu";
import ProductTabContents from "./ProductTabContents";

const ProductTab = () => {
  return (
    <div className={styles["tab-main"]}>
      <ProductTabMenu />
      <ProductTabContents />
    </div>
  );
};

export default ProductTab;

import styles from "./ProductTab.module.css";
import ProductTabMenu from "./ProductTabMenu";
import ProductTabContents from "./ProductTabContents";
import { useRef } from "react";

const ProductTab = () => {
  const refArray = useRef([]);

  return (
    <div className={styles["tab-main"]}>
      <ProductTabMenu refArray={refArray} />
      <ProductTabContents refArray={refArray} />
    </div>
  );
};

export default ProductTab;

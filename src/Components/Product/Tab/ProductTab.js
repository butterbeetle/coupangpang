import styles from "./ProductTab.module.css";
/* Components */
import ProductTabMenu from "./ProductTabMenu";
import ProductTabContents from "./ProductTabContents";
/* Hook */
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

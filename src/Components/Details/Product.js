import { useParams } from "react-router";
import styles from "./Product.module.css";

const Product = () => {
  const { productId } = useParams();
  return (
    <section className={styles["product"]}>
      <div className={styles["product__infos"]}>{productId}</div>
    </section>
  );
};

export default Product;

import styles from "./ProductDelivaryCompany.module.css";

const ProductDelivaryCompany = () => {
  return (
    <div className={styles["product__info--delivery--company"]}>
      배송사:
      <p>롯데택배</p>
    </div>
  );
};

export default ProductDelivaryCompany;

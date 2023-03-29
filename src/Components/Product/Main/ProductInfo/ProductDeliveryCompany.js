import styles from "./ProductDeliveryCompany.module.css";

const ProductDeliveryCompany = () => {
  return (
    <div className={styles["product__info--delivery--company"]}>
      배송사:
      <p>롯데택배</p>
    </div>
  );
};

export default ProductDeliveryCompany;

import styles from "./ProductDelivery.module.css";

const ProductDelivery = () => {
  return (
    <div className={styles["product__info--delivery"]}>
      <p className={styles["delivery--type"]}>무료배송</p>
      <p className={styles["delivery--date"]}>금요일 3/3 도착 예정</p>
    </div>
  );
};

export default ProductDelivery;

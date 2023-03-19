import styles from "./ProductDelivary.module.css";

const ProductDelivary = () => {
  return (
    <div className={styles["product__info--delivary"]}>
      <p className={styles["delivary--type"]}>무료배송</p>
      <p className={styles["delivary--date"]}>금요일 3/3 도착 예정</p>
    </div>
  );
};

export default ProductDelivary;

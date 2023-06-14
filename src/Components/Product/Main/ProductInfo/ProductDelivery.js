import { dateFormat } from "../../../../Util/format";
import styles from "./ProductDelivery.module.css";

const ProductDelivery = () => {
  const { day, month, date } = dateFormat(new Date());
  return (
    <div className={styles["product__info--delivery"]}>
      <p className={styles["delivery--type"]}>무료배송</p>
      <p
        className={styles["delivery--date"]}
      >{`${day}요일 ${month}/${date} 도착 예정`}</p>
    </div>
  );
};

export default ProductDelivery;

import { useSelector } from "react-redux";
import styles from "./ProductDeliveryCompany.module.css";

const ProductDeliveryCompany = () => {
  const { delivery_service } = useSelector((state) => state.prod);
  return (
    <div className={styles["product__info--delivery--company"]}>
      배송사:
      <p>{delivery_service}</p>
    </div>
  );
};

export default ProductDeliveryCompany;

import { useSelector } from "react-redux";
import styles from "./ProductDesc.module.css";

const ProductDesc = () => {
  const prodId = useSelector((state) => state.prod.id);
  return (
    <div className={styles["product__info--desc"]}>
      <ul>
        <li>쿠팡상품번호: {prodId}</li>
      </ul>
    </div>
  );
};

export default ProductDesc;

import styles from "./ProductInquiry.module.css";
/* Icon */
import { BsChatLeftText } from "react-icons/bs";
const ProductInquiry = () => {
  return (
    <div className={styles["product__info--inquiry"]}>
      <BsChatLeftText />
      <p>상품정보에 문제가 있나요?</p>
    </div>
  );
};

export default ProductInquiry;

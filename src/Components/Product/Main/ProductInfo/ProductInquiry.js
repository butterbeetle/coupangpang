import styles from "./ProductInquiry.module.css";
/* Icon */
import { MdChat } from "@react-icons/all-files/md/MdChat";
const ProductInquiry = () => {
  return (
    <div className={styles["product__info--inquiry"]}>
      <MdChat />
      <p>상품정보에 문제가 있나요?</p>
    </div>
  );
};

export default ProductInquiry;

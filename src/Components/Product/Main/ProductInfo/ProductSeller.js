import styles from "./ProductSeller.module.css";
/* Icon */
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
const ProductSeller = () => {
  return (
    <div className={styles["product__info--seller"]}>
      <div className={styles["seller--personal"]}>
        <p className={styles["seller--title"]}>판매자:</p>
        <p className={styles["seller--name"]}>(사)해남고구마생산자협회</p>
        <div className={styles["seller--prod"]} />
      </div>
      <div className={styles["seller--evaluation"]}>
        <p className={styles["seller--title"]}>판매자 평가</p>
        <FiThumbsUp className={styles["thumbs"]} />
        <p className={styles["evaluation--rate"]}>83%</p>
        <p className={styles["evaluation--count"]}>(19,329)</p>
        <AiOutlineInfoCircle className={styles["i"]} />
      </div>
    </div>
  );
};

export default ProductSeller;

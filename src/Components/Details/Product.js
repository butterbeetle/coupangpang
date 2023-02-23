import styles from "./Product.module.css";
// import { useParams } from "react-router";
import testImg from "../../assets/img/test/test.jpg";
import testImg1 from "../../assets/img/test/test1.jpg";
import testImg2 from "../../assets/img/test/test2.jpg";
import testImg3 from "../../assets/img/test/test3.jpg";
import testImg4 from "../../assets/img/test/test4.jpg";
import testImg5 from "../../assets/img/test/test5.jpg";
import testImg6 from "../../assets/img/test/test6.jpg";
import testImg7 from "../../assets/img/test/test7.jpg";

const Product = () => {
  // const { productId } = useParams();
  return (
    <section className={styles["product"]}>
      <div className={styles["product__main"]}>
        <div className={styles["product__category"]}>
          {"쿠팡 홈 > 식품 > 채소"}
        </div>
        <div className={styles["product__info"]}>
          <div className={styles["product__image"]}>
            <ul>
              <div className={styles["product__image--small"]}>
                <img src={testImg} alt="test" />
              </div>
              <div className={styles["product__image--small"]}>
                <img src={testImg1} alt="test1" />
              </div>
              <div className={styles["product__image--small"]}>
                <img src={testImg2} alt="test1" />
              </div>
              <div className={styles["product__image--small"]}>
                <img src={testImg3} alt="test1" />
              </div>
              <div className={styles["product__image--small"]}>
                <img src={testImg4} alt="test1" />
              </div>
              <div className={styles["product__image--small"]}>
                <img src={testImg5} alt="test1" />
              </div>
              <div className={styles["product__image--small"]}>
                <img src={testImg6} alt="test1" />
              </div>
              <div className={styles["product__image--small"]}>
                <img src={testImg7} alt="test1" />
              </div>
            </ul>
            <div className={styles["product__image--big"]}>
              <img src={testImg} alt="big" />
            </div>
          </div>
          <div className={styles["product__text"]}>text</div>
        </div>
      </div>
    </section>
  );
};

export default Product;

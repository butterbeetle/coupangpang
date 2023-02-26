import styles from "./Product.module.css";
// import { useParams } from "react-router";
import ProductImage from "./ProductImage";
import { FiHeart } from "react-icons/fi";
import { BsFillShareFill, BsCoin } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Product = () => {
  // const { productId } = useParams();

  return (
    <section className={styles["product"]}>
      <div className={styles["product__main"]}>
        <div className={styles["product__category"]}>
          {"쿠팡 홈 > 식품 > 채소"}
        </div>
        <div className={styles["product__infos"]}>
          <ProductImage />
          <div className={styles["product__info"]}>
            <div className={styles["product__info--header"]}>
              <p className={styles["product__info--title"]}>
                진품인증 받은 해남고구마
              </p>
              <div className={styles["review"]}>
                <span className={styles["empty-star"]}>
                  <span
                    className={styles["review-star"]}
                    style={{ width: "80%" }}
                  />
                </span>
                <span className={styles["review--count"]}>1,865개 상품평</span>
              </div>
              <div className={styles["product__info--icon"]}>
                <div className={styles["heart"]}>
                  <FiHeart className={styles["heart--icon"]} />
                </div>
                <div className={styles["share"]}>
                  <BsFillShareFill className={styles["share--icon"]} />
                </div>
              </div>
            </div>
            <div className={styles["product__info--price"]}>
              <div className={styles["price__discount"]}>
                <p className={styles["price__discount__rate"]}>32%</p>
                <p className={styles["price__origin"]}>16,000원</p>
                <AiOutlineInfoCircle />
              </div>
              <div className={styles["price__sale"]}>
                <p className={styles["price__total"]}>13,000원</p>
                <p className={styles["price__info"]}>쿠팡판매가</p>
              </div>
              <div className={styles["price__coupon"]}>
                <p className={styles["price__total"]}>10,870원</p>
                <p className={styles["price__info"]}>와우할인가</p>
              </div>
              <div>
                <div className={styles["price__badge"]}>
                  <BsCoin />
                  <p>최대 544원 적립</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

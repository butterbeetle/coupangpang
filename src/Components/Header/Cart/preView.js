import styles from "./preView.module.css";
/* Redux */
import { useSelector } from "react-redux";
/* Hook */
import { Link } from "react-router-dom";

const PreView = () => {
  /* 장바구니 */
  const { items } = useSelector((state) => state.cart);

  let cartView =
    items?.length > 0 ? (
      <div className={styles["view"]}>
        {[...items]
          .reverse()
          .slice(0, 4)
          .map((item) => (
            <Link to={`/products/${item.id}`} key={item.id}>
              <div className={styles["view-item"]}>
                <img src={item.thumbnail} alt="" />
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        <Link to="/cart">
          <div className={styles["my-cart"]}>장바구니 전체보기</div>
        </Link>
      </div>
    ) : (
      <div className={styles["view"]}>
        <p className={styles["none"]}>장바구니에 담긴 상품이 없습니다.</p>
      </div>
    );

  return (
    <div className={styles["pre-view"]}>
      <i className={styles["box-tail"]} />
      {cartView}
    </div>
  );
};

export default PreView;

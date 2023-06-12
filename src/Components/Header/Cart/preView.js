import styles from "./preView.module.css";
/* Redux */
import { useSelector } from "react-redux";
/* Hook */
import { Link } from "react-router-dom";

const PreView = () => {
  /* 장바구니 */
  const { items } = useSelector((state) => state.cart);

  return (
    <div className={styles["pre-view"]}>
      <i className={styles["box-tail"]} />
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
    </div>
  );
};

export default PreView;

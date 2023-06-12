import styles from "./index.module.css";
/* Redux */
import { useSelector } from "react-redux";
/* Hook */
import { useState } from "react";
import { Link } from "react-router-dom";
import PreView from "./preView";

const HeaderCart = () => {
  /* 장바구니 */
  const { totalQuantity } = useSelector((state) => state.cart);
  const [mouseEnter, setMouseEnter] = useState(false);

  const onMouseEnter = () => {
    setMouseEnter(true);
  };
  const onMouseLeave = () => {
    setMouseEnter(false);
  };

  return (
    <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {mouseEnter && <PreView />}
      <Link to="/cart">
        <div className={styles["main"]}>
          <p className={styles["cart"]}>장바구니</p>
          <p className={styles["counter"]}>
            {totalQuantity > 0 ? totalQuantity : 0}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default HeaderCart;

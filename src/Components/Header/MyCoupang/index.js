import styles from "./index.module.css";
/* Hook */
import { useState } from "react";

const HeaderMyCoupang = () => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const onMouseEnter = () => {
    setMouseEnter(true);
  };
  const onMouseLeave = () => {
    setMouseEnter(false);
  };

  return (
    <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {mouseEnter && (
        <div className={styles["pre-view"]}>
          <i className={styles["box-tail"]} />
          <div className={styles["view"]}>
            <p>주문목록</p>
            <p>취소/반품</p>
            <p>찜 리스트</p>
          </div>
        </div>
      )}
      <div className={styles["main"]}>
        <p className={styles["my-coupang"]}>마이쿠팡</p>
      </div>
    </li>
  );
};

export default HeaderMyCoupang;

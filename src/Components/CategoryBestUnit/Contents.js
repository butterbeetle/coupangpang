import CategoryItemList from "./CategoryItemList";
import CategoryPromotion from "./CategoryPromotion";
import styles from "./Contents.module.css";

import best_title1 from "../../img/best_title/best_title_womanclothe2.png";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import SideMenuContext from "../../store/sideMenu-context";
const Contents = () => {
  const SideMenuCtx = useContext(SideMenuContext);

  const contentOffset = useRef(null);

  return (
    <div className={styles["contents"]} ref={contentOffset}>
      <div className={styles["main"]}>
        <div className={styles["category"]}>
          <img src={best_title1} alt="Title" />
          <Link to="/">
            <span className={styles["shortcut"]}>{"바로가기 >"}</span>
          </Link>
        </div>
        <div className={styles["keyword"]}>
          <h4>HOT키워드</h4>
          <ul>
            <li>#반팔 티셔츠</li>
            <li>#원피스</li>
            <li>#청바지</li>
            <li>#에코백</li>
            <li>#샌들</li>
            <li>#에코백</li>
          </ul>
        </div>
        <CategoryPromotion />
        <CategoryItemList />
      </div>
    </div>
  );
};

export default Contents;

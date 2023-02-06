import CategoryItemList from "./CategoryItemList";
import CategoryPromotion from "./CategoryPromotion";
import styles from "./Contents.module.css";
import icons from "./ItemsIcon.module.css";

import { Link } from "react-router-dom";

const Contents = ({ items }) => {
  return (
    <div className={styles["contents"]}>
      <div className={`${styles["main"]} ${icons[items.styles + "-border"]}`}>
        <div className={styles["category"]}>
          <span className={`${styles["title"]} ${styles[items.styles]}`} />
          <Link to="/">
            <span className={styles["shortcut"]}>{"바로가기 >"}</span>
          </Link>
        </div>
        <div className={styles["keyword"]}>
          <h4>HOT키워드</h4>
          <ul>
            {items.keywords.map((keyword) => (
              <li
                className={icons[items.styles + "-color"]}
                key={keyword.key}
              >{`#${keyword}`}</li>
            ))}
          </ul>
        </div>
        <CategoryPromotion category={items.styles} />
        <CategoryItemList />
      </div>
    </div>
  );
};

export default Contents;

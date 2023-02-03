import CategoryItemList from "./CategoryItemList";
import CategoryPromotion from "./CategoryPromotion";
import styles from "./Contents.module.css";

import { Link } from "react-router-dom";

const Contents = ({ items }) => {
  console.log(items.keywords);
  return (
    <div className={styles["contents"]}>
      <div className={styles["main"]}>
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
              <li key={items.id}>{`#${keyword}`}</li>
            ))}
          </ul>
        </div>
        <CategoryPromotion />
        <CategoryItemList />
      </div>
    </div>
  );
};

export default Contents;

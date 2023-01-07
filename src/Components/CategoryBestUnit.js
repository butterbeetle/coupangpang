import styles from "./CategoryBestUnit.module.css";
import today_shopping_item from "../img/today_shopping_item/today_shopping_item1.jpg";
import best_title1 from "../img/best_title/best_title_womanclothe2.png";
import best_thumnail1 from "../img/best_title_thumnail/category_best_woman_thumbnail.jpg";
import { Link } from "react-router-dom";

const CategoryBestUnit = () => {
  return (
    <article className={styles["contents"]}>
      <span className={styles["title"]} />
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
        <div className={styles["promotion"]}>
          <ul className={styles["promotion__thumnail"]}>
            <li>
              <Link to="/">
                <img src={best_thumnail1} alt="thumnail" />
              </Link>
              <span className={styles["promotion__caption"]}>
                <p className={styles["promotino__caption-title"]}>
                  겨울 패션 할인 ~80%
                </p>
                <p className={styles["promotino__caption-description"]}>
                  1월 패션위크
                </p>
              </span>
            </li>
          </ul>
          <ul className={styles["promotion__dot"]}>
            <li className={styles["test"]}></li>
            <li className={styles["test"]}></li>
            <li className={styles["test"]}></li>
            <li className={styles["test"]}></li>
            <li className={styles["test"]}></li>
            <li className={styles["test"]}></li>
            <li className={styles["test"]}></li>
            <li className={styles["test"]}></li>
          </ul>
        </div>
        {/* <div className={styles.test2}>
          <div className={styles.test3}>
            <ul>
              <li>
                <a href="/">
                  <img src={today_shopping_item} alt="오늘의 쇼핑 제안1" />
                  <div>
                    <span className={styles.now_recommend_ad_title}>
                      TCL 4K QLED 안드로이드 안드로이드
                    </span>
                  </div>
                  <div>
                    <span className={styles.empty_star}>
                      <span className={styles.review_star} />
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <div>
                  <a href="/">
                    <img src={today_shopping_item} alt="오늘의 쇼핑 제안1" />
                    <div>
                      <span className={styles.now_recommend_ad_title}>
                        TCL 4K QLED 안드로이드 안드로이드
                      </span>
                    </div>
                    <div>
                      <span className={styles.empty_star}>
                        <span className={styles.review_star} />
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <a href="/">
                    <img src={today_shopping_item} alt="오늘의 쇼핑 제안1" />
                    <div>
                      <span className={styles.now_recommend_ad_title}>
                        TCL 4K QLED 안드로이드 안드로이드
                      </span>
                    </div>
                    <div>
                      <span className={styles.empty_star}>
                        <span className={styles.review_star} />
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <a href="/">
                    <img src={today_shopping_item} alt="오늘의 쇼핑 제안1" />
                    <div>
                      <span className={styles.now_recommend_ad_title}>
                        TCL 4K QLED 안드로이드 안드로이드
                      </span>
                    </div>
                    <div>
                      <span className={styles.empty_star}>
                        <span className={styles.review_star} />
                      </span>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </article>
  );
};
export default CategoryBestUnit;

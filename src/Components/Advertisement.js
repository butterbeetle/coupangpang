import styles from "./Advertisement.module.css";

import today_shopping_item from "../img/today_shopping_item/today_shopping_item1.jpg";

import PersonalizedAds from "./PersonalizedAds";
import RelatedAds from "./RelatedAds";

const Advertisement = () => {
  return (
    <article className={styles["contents"]}>
      <PersonalizedAds />
      <RelatedAds />

      <div className={styles.today_shopping_box}>
        <div className={styles.today_shopping_title_box}>
          <span>요즘 뜨는 놀이/다용도매트</span>
        </div>
        <div className={styles.today_shopping_items_box}>
          <ul>
            <li>
              <div>
                <a href="/">
                  <img src={today_shopping_item} alt="오늘의 쇼핑 제안1" />
                  <div>
                    <span className={styles.shopping_item_title}>
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
                    <span className={styles.shopping_item_title}>
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
                    <span className={styles.shopping_item_title}>
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
                    <span className={styles.shopping_item_title}>
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
                    <span className={styles.shopping_item_title}>
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
        <div className={styles.ad_box}>
          <span>광고</span>
        </div>
      </div>

      <div className={styles.now_recommend_ad_box}>
        <div className={styles.now_recommend_ad_title_box}>
          <span>오늘의 판매자 특가</span>
          <span>나중에 없애기</span>
          <span>1/3</span>
        </div>
        <div className={styles.now_recommend_ad_items_box}>
          <div>
            <span className={styles.now_recommend_ad_prev_button}></span>
          </div>
          <div className={styles.now_recommend_ad_items}>
            <ul>
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
          <div>
            <span className={styles.now_recommend_ad_next_button}></span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Advertisement;

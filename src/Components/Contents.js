import classes from "./Contents.module.css";
// 오늘의 쇼핑 제안
import today_shopping_item from "../img/today_shopping_item/today_shopping_item1.jpg";

const Contents = () => {
  return (
    <section className={classes.main_contents_section}>
      <article className={classes.side_bar_box}>
        <div className={classes.side_bar}></div>
      </article>
      <article className={classes.today_discovery_box}>
        <div>
          <div className={classes.title_box}>
            <div></div>
          </div>
          <div className={classes.today_items}>
            <div className={classes.today_items_grid}>
              <div className={[classes.item, classes.today_item1].join(" ")}>
                item1
              </div>
              <div className={[classes.item, classes.today_item2].join(" ")}>
                item2
              </div>
              <div className={[classes.item, classes.today_item3].join(" ")}>
                item3
              </div>
              <div className={[classes.item, classes.today_item4].join(" ")}>
                item4
              </div>
              <div className={[classes.item, classes.today_item5].join(" ")}>
                item5
              </div>
              <div className={[classes.item, classes.today_item6].join(" ")}>
                item6
              </div>
              <div className={[classes.item, classes.today_item7].join(" ")}>
                item7
              </div>
              <div className={[classes.item, classes.today_item8].join(" ")}>
                item8
              </div>
              <div className={[classes.item, classes.today_item9].join(" ")}>
                item9
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className={classes.today_recommend_box}>
        <div className={classes.today_shopping_box}>
          <div className={classes.today_shopping_title_box}>
            <span>오늘의 쇼핑 제안</span>
          </div>
          <div className={classes.today_shopping_items_box}>
            <ul>
              <li>
                <div>
                  <a href="/">
                    <img src={today_shopping_item} alt="오늘의 쇼핑 제안1" />
                    <div>
                      <span className={classes.shopping_item_title}>
                        TCL 4K QLED 안드로이드 안드로이드
                      </span>
                    </div>
                    <div>
                      <span className={classes.empty_star}>
                        <span className={classes.review_star} />
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
                      <span className={classes.shopping_item_title}>
                        TCL 4K QLED 안드로이드 안드로이드
                      </span>
                    </div>
                    <div>
                      <span className={classes.empty_star}>
                        <span className={classes.review_star} />
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
                      <span className={classes.shopping_item_title}>
                        TCL 4K QLED 안드로이드 안드로이드
                      </span>
                    </div>
                    <div>
                      <span className={classes.empty_star}>
                        <span className={classes.review_star} />
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
                      <span className={classes.shopping_item_title}>
                        TCL 4K QLED 안드로이드 안드로이드
                      </span>
                    </div>
                    <div>
                      <span className={classes.empty_star}>
                        <span className={classes.review_star} />
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
                      <span className={classes.shopping_item_title}>
                        TCL 4K QLED 안드로이드 안드로이드
                      </span>
                    </div>
                    <div>
                      <span className={classes.empty_star}>
                        <span className={classes.review_star} />
                      </span>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className={classes.ad_box}>
            <span>광고</span>
          </div>
        </div>

        <div className={classes.now_recommend_ad_box}>
          <div className={classes.now_recommend_ad_title_box}>
            <span>지금 이 상품이 필요하신가요?</span>
            <span>광고</span>
            <span>1/3</span>
          </div>
          <div className={classes.now_recommend_ad_items_box}>
            <div>
              <span className={classes.now_recommend_ad_prev_button}></span>
            </div>
            <div className={classes.now_recommend_ad_items}>
              <ul>
                <li>
                  <div>
                    <a href="/">
                      <img src={today_shopping_item} alt="오늘의 쇼핑 제안1" />
                      <div>
                        <span className={classes.now_recommend_ad_title}>
                          TCL 4K QLED 안드로이드 안드로이드
                        </span>
                      </div>
                      <div>
                        <span className={classes.empty_star}>
                          <span className={classes.review_star} />
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
                        <span className={classes.now_recommend_ad_title}>
                          TCL 4K QLED 안드로이드 안드로이드
                        </span>
                      </div>
                      <div>
                        <span className={classes.empty_star}>
                          <span className={classes.review_star} />
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
                        <span className={classes.now_recommend_ad_title}>
                          TCL 4K QLED 안드로이드 안드로이드
                        </span>
                      </div>
                      <div>
                        <span className={classes.empty_star}>
                          <span className={classes.review_star} />
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
                        <span className={classes.now_recommend_ad_title}>
                          TCL 4K QLED 안드로이드 안드로이드
                        </span>
                      </div>
                      <div>
                        <span className={classes.empty_star}>
                          <span className={classes.review_star} />
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
                        <span className={classes.now_recommend_ad_title}>
                          TCL 4K QLED 안드로이드 안드로이드
                        </span>
                      </div>
                      <div>
                        <span className={classes.empty_star}>
                          <span className={classes.review_star} />
                        </span>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <span className={classes.now_recommend_ad_next_button}></span>
            </div>
          </div>
        </div>

        <div className={classes.today_shopping_box}>
          <div className={classes.today_shopping_title_box}>
            <span>요즘 뜨는 놀이/다용도매트</span>
          </div>
          <div className={classes.today_shopping_items_box}>
            <ul>
              <li>
                <div>
                  <a href="/">
                    <img src={today_shopping_item} alt="오늘의 쇼핑 제안1" />
                    <div>
                      <span className={classes.shopping_item_title}>
                        TCL 4K QLED 안드로이드 안드로이드
                      </span>
                    </div>
                    <div>
                      <span className={classes.empty_star}>
                        <span className={classes.review_star} />
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
                      <span className={classes.shopping_item_title}>
                        TCL 4K QLED 안드로이드 안드로이드
                      </span>
                    </div>
                    <div>
                      <span className={classes.empty_star}>
                        <span className={classes.review_star} />
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
                      <span className={classes.shopping_item_title}>
                        TCL 4K QLED 안드로이드 안드로이드
                      </span>
                    </div>
                    <div>
                      <span className={classes.empty_star}>
                        <span className={classes.review_star} />
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
                      <span className={classes.shopping_item_title}>
                        TCL 4K QLED 안드로이드 안드로이드
                      </span>
                    </div>
                    <div>
                      <span className={classes.empty_star}>
                        <span className={classes.review_star} />
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
                      <span className={classes.shopping_item_title}>
                        TCL 4K QLED 안드로이드 안드로이드
                      </span>
                    </div>
                    <div>
                      <span className={classes.empty_star}>
                        <span className={classes.review_star} />
                      </span>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className={classes.ad_box}>
            <span>광고</span>
          </div>
        </div>

        <div className={classes.now_recommend_ad_box}>
          <div className={classes.now_recommend_ad_title_box}>
            <span>오늘의 판매자 특가</span>
            <span>나중에 없애기</span>
            <span>1/3</span>
          </div>
          <div className={classes.now_recommend_ad_items_box}>
            <div>
              <span className={classes.now_recommend_ad_prev_button}></span>
            </div>
            <div className={classes.now_recommend_ad_items}>
              <ul>
                <li>
                  <div>
                    <a href="/">
                      <img src={today_shopping_item} alt="오늘의 쇼핑 제안1" />
                      <div>
                        <span className={classes.now_recommend_ad_title}>
                          TCL 4K QLED 안드로이드 안드로이드
                        </span>
                      </div>
                      <div>
                        <span className={classes.empty_star}>
                          <span className={classes.review_star} />
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
                        <span className={classes.now_recommend_ad_title}>
                          TCL 4K QLED 안드로이드 안드로이드
                        </span>
                      </div>
                      <div>
                        <span className={classes.empty_star}>
                          <span className={classes.review_star} />
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
                        <span className={classes.now_recommend_ad_title}>
                          TCL 4K QLED 안드로이드 안드로이드
                        </span>
                      </div>
                      <div>
                        <span className={classes.empty_star}>
                          <span className={classes.review_star} />
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
                        <span className={classes.now_recommend_ad_title}>
                          TCL 4K QLED 안드로이드 안드로이드
                        </span>
                      </div>
                      <div>
                        <span className={classes.empty_star}>
                          <span className={classes.review_star} />
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
                        <span className={classes.now_recommend_ad_title}>
                          TCL 4K QLED 안드로이드 안드로이드
                        </span>
                      </div>
                      <div>
                        <span className={classes.empty_star}>
                          <span className={classes.review_star} />
                        </span>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <span className={classes.now_recommend_ad_next_button}></span>
            </div>
          </div>
        </div>
      </article>
      <article className={classes.category_recommend_box}>
        <div>
          <div className={classes.title_box}>
            <div></div>
          </div>
          <div className={classes.category_items_box}>
            <div className={classes.category_items_box}>
              <span>Title</span>
              <span>HOT 키워드</span>
            </div>
            <div>
              <span>프로모션</span>
            </div>
            <div>
              <span>상품</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contents;

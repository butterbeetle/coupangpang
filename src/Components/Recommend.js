import styles from "./Recommend.module.css";
import RecommendItems from "./RecommendItems";
import today_shopping_item from "../img/today_shopping_item/today_shopping_item1.jpg";

import recommend_item01 from "../assets/img/recommendItems/recommend_item01.jpg";
import recommend_item02 from "../assets/img/recommendItems/recommend_item02.jpg";
import recommend_item03 from "../assets/img/recommendItems/recommend_item03.jpg";
import recommend_item04 from "../assets/img/recommendItems/recommend_item04.png";
import recommend_item05 from "../assets/img/recommendItems/recommend_item05.png";
import recommend_item06 from "../assets/img/recommendItems/recommend_item06.jpg";

const recommendItems = [
  {
    img: recommend_item01,
    title: "맛있게 매운 선화동실비김치 800g + 매운실비파김치 500g 세트",
    discount: 21,
    price: 16900,
    delivary_type: "free",
    review_score: 5,
    review_count: 842,
  },
  {
    img: recommend_item02,
    title:
      "신일 캠핑용 휴대용 부탄 가스 난로 캠핑 낚시 소형 미니 히터 SCG-GA1350, 신일 캠핑 가스히터(크림화이트)",
    discount: null,
    price: null,
    delivary_type: "rocket_buy",
    review_score: 4.5,
    review_count: 152,
  },
  {
    img: recommend_item03,
    title: "제스파 수면참견 안마기 무선 목어깨 베개마사지기, ZP2366",
    discount: 33,
    price: null,
    delivary_type: "rocket_delivary",
    review_score: 4.5,
    review_count: 2524,
  },
  {
    img: recommend_item04,
    title: "맛있게 매운 선화동실비김치 800g + 매운실비파김치 500g 세트",
    discount: 21,
    price: null,
    delivary_type: "rocket_install",
    review_score: 4,
    review_count: 831,
  },
  {
    img: recommend_item05,
    title:
      "제스파 AI 음성인식 조그다이얼 자동 안마의자 + 전용 러그 세트 방문설치, ZPC2095, 살구색",
    discount: 55,
    price: null,
    delivary_type: "free",
    review_score: 5,
    review_count: 194,
  },
  // {
  //   img: recommend_item05,
  //   title: "[코지마 본사] 칼더 익스트림 안마의자 CMC-L500(G), 브라운, CMC-L500",
  //   discount: 55,
  //   price: null,
  //   delivary_type: "free",
  //   review_score: 4.5,
  //   review_count: 111,
  // },
  // {
  //   img: recommend_item06,
  //   title: "바른컴퓨터 게이밍 컴퓨터 풀세트 모니터포함 PC 롤 서든어택 배틀그라운드 피파, 기본형, BAF-F11",
  //   discount: 65,
  //   price: null,
  //   delivary_type: "free",
  //   review_score: 5,
  //   review_count: 1736,
  // },
];

const Recommend = () => {
  return (
    <article className={styles["recommend"]}>
      <div className={styles["recommend__contents"]}>
        <div className={styles["recommend__title"]}>
          <span>오늘의 쇼핑 제안</span>
        </div>
        <div className={styles["recommend__items"]}>
          <ul className={styles["recommend__items--ul"]}>
            {recommendItems.map((item) => (
              <RecommendItems
                img={item.img}
                title={item.title}
                discount={item.discount}
                price={item.price}
                delivary_type={item.delivary_type}
                review_score={item.review_score}
                review_count={item.review_count}
              />
            ))}
          </ul>
        </div>
        <div className={styles.ad_box}>
          <span>광고</span>
        </div>
      </div>

      <div className={styles.now_recommend_ad_box}>
        <div className={styles.now_recommend_ad_title_box}>
          <span>지금 이 상품이 필요하신가요?</span>
          <span>광고</span>
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

export default Recommend;

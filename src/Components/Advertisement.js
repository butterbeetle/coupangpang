import styles from "./Advertisement.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import today_shopping_item from "../img/today_shopping_item/today_shopping_item1.jpg";

import personalized_Ads_Item_01 from "../assets/img/personalizedAdsItems/personalized_Ads_Item_01.jpg";
import personalized_Ads_Item_02 from "../assets/img/personalizedAdsItems/personalized_Ads_Item_02.jpg";
import personalized_Ads_Item_03 from "../assets/img/personalizedAdsItems/personalized_Ads_Item_03.jpg";
import personalized_Ads_Item_04 from "../assets/img/personalizedAdsItems/personalized_Ads_Item_04.png";
import personalized_Ads_Item_05 from "../assets/img/personalizedAdsItems/personalized_Ads_Item_05.png";

import personalized_Ads_Item_06 from "../assets/img/personalizedAdsItems/personalized_Ads_Item_06.jpg";
import personalized_Ads_Item_07 from "../assets/img/personalizedAdsItems/personalized_Ads_Item_07.jpg";
import personalized_Ads_Item_08 from "../assets/img/personalizedAdsItems/personalized_Ads_Item_08.jpg";
import personalized_Ads_Item_09 from "../assets/img/personalizedAdsItems/personalized_Ads_Item_09.jpg";
import personalized_Ads_Item_10 from "../assets/img/personalizedAdsItems/personalized_Ads_Item_10.jpg";

import personalized_Ads_Item_11 from "../assets/img/personalizedAdsItems/personalized_Ads_Item_11.jpg";
import personalized_Ads_Item_12 from "../assets/img/personalizedAdsItems/personalized_Ads_Item_12.jpg";
import personalized_Ads_Item_13 from "../assets/img/personalizedAdsItems/personalized_Ads_Item_13.jpg";
import personalized_Ads_Item_14 from "../assets/img/personalizedAdsItems/personalized_Ads_Item_14.jpg";
import personalized_Ads_Item_15 from "../assets/img/personalizedAdsItems/personalized_Ads_Item_15.jpg";

import related_Ads_Item_01 from "../assets/img/relatedAdsItems/related_Ads_Item_01.jpg";
import related_Ads_Item_02 from "../assets/img/relatedAdsItems/related_Ads_Item_02.png";
import related_Ads_Item_03 from "../assets/img/relatedAdsItems/related_Ads_Item_03.jpg";
import related_Ads_Item_04 from "../assets/img/relatedAdsItems/related_Ads_Item_04.gif";
import related_Ads_Item_05 from "../assets/img/relatedAdsItems/related_Ads_Item_05.jpg";

import related_Ads_Item_06 from "../assets/img/relatedAdsItems/related_Ads_Item_06.jpg";
import related_Ads_Item_07 from "../assets/img/relatedAdsItems/related_Ads_Item_07.jpg";
import related_Ads_Item_08 from "../assets/img/relatedAdsItems/related_Ads_Item_08.png";
import related_Ads_Item_09 from "../assets/img/relatedAdsItems/related_Ads_Item_09.jpg";
import related_Ads_Item_10 from "../assets/img/relatedAdsItems/related_Ads_Item_10.jpg";

import related_Ads_Item_11 from "../assets/img/relatedAdsItems/related_Ads_Item_11.jpg";
import related_Ads_Item_12 from "../assets/img/relatedAdsItems/related_Ads_Item_12.jpg";
import related_Ads_Item_13 from "../assets/img/relatedAdsItems/related_Ads_Item_13.jpg";
import related_Ads_Item_14 from "../assets/img/relatedAdsItems/related_Ads_Item_14.jpg";
import related_Ads_Item_15 from "../assets/img/relatedAdsItems/related_Ads_Item_15.jpg";

import AdsItems from "./AdsItems";

const personalizedAdsItems = [
  {
    img: personalized_Ads_Item_01,
    title: "맛있게 매운 선화동실비김치 800g + 매운실비파김치 500g 세트",
    discount: 21,
    price: 16900,
    badge: null,
    review_score: 5,
    review_count: 842,
  },
  {
    img: personalized_Ads_Item_02,
    title:
      "신일 캠핑용 휴대용 부탄 가스 난로 캠핑 낚시 소형 미니 히터 SCG-GA1350, 신일 캠핑 가스히터(크림화이트)",
    discount: null,
    price: 112233,
    badge: "rocket_buy",
    review_score: 4.5,
    review_count: 152,
  },
  {
    img: personalized_Ads_Item_03,
    title: "제스파 수면참견 안마기 무선 목어깨 베개마사지기, ZP2366",
    discount: 33,
    price: 69700,
    badge: "rocket_delivary",
    review_score: 4.5,
    review_count: 2524,
  },
  {
    img: personalized_Ads_Item_04,
    title: "맛있게 매운 선화동실비김치 800g + 매운실비파김치 500g 세트",
    discount: 21,
    price: 2100,
    badge: "rocket_install",
    review_score: 4,
    review_count: 831,
  },
  {
    img: personalized_Ads_Item_05,
    title:
      "제스파 AI 음성인식 조그다이얼 자동 안마의자 + 전용 러그 세트 방문설치, ZPC2095, 살구색",
    discount: 55,
    price: 253340,
    badge: "free_delivary",
    review_score: 5,
    review_count: 194,
  },

  {
    img: personalized_Ads_Item_06,
    title: "[코지마 본사] 칼더 익스트림 안마의자 CMC-L500(G), 브라운, CMC-L500",
    discount: 3,
    price: 123456,
    badge: "free_delivary",
    review_score: 3,
    review_count: 111,
  },
  {
    img: personalized_Ads_Item_07,
    title:
      "TCL 안드로이드11 4K Mini LED TV, 191cm(75인치), 75C835, 스탠드형, 방문설치",
    discount: null,
    price: 2159000,
    badge: "rocket_install",
    review_score: 5,
    review_count: 133,
  },
  {
    img: personalized_Ads_Item_08,
    title:
      "바른컴퓨터 게이밍 컴퓨터 풀세트 모니터포함 PC 롤 서든어택 배틀그라운드 피파, 기본형, BAF-F13",
    discount: 54,
    price: 909000,
    badge: "free_delivary",
    review_score: 5,
    review_count: 1765,
  },
  {
    img: personalized_Ads_Item_09,
    title: "태백하늘 배추물김치/국산100 %(무료배송), 배추물김치5kg",
    discount: 14,
    price: 30000,
    badge: "free_delivary",
    review_score: 4.5,
    review_count: 169,
  },
  {
    img: personalized_Ads_Item_10,
    title: "피코크 조선호텔 포기김치 4kg, 아이스팩 포장",
    discount: null,
    price: 32900,
    badge: "free_delivary",
    review_score: 4.5,
    review_count: 1829,
  },

  {
    img: personalized_Ads_Item_11,
    title:
      "정식발매 아카시스 USB 3.2 Type C 듀얼 베이 NVMe M.2 SSD 도킹 스테이션 SSD 복사기",
    discount: null,
    price: 149000,
    badge: "null",
    review_score: 5,
    review_count: 1,
  },
  {
    img: personalized_Ads_Item_12,
    title: "[쿠팡수입] DJI Mini 3 Pro + DJI RC 조종기, 혼합색상",
    discount: null,
    price: 1412000,
    badge: "rocket_delivary",
    review_score: 5,
    review_count: 205,
  },
  {
    img: personalized_Ads_Item_13,
    title: "PS5 호라이즌 포비든 웨스트 스탠다드 에디션, ECAS-00033",
    discount: 35,
    price: 44500,
    badge: "rocket_delivary",
    review_score: 5,
    review_count: 53,
  },
  {
    img: personalized_Ads_Item_14,
    title: "헥토르 망치 3500g, 1개",
    discount: null,
    price: 26400,
    badge: "rocket_delivary",
    review_score: 4.5,
    review_count: 51,
  },
  {
    img: personalized_Ads_Item_15,
    title: "애니빔 안드로이드OS내장 Full HD 초고화질 빔프로젝터, ALP-600V",
    discount: null,
    price: 318500,
    badge: "rocket_delivary",
    review_score: 4.5,
    review_count: 16,
  },
];

const relatedAdsItems = [
  {
    img: related_Ads_Item_01,
    title:
      "[ 아르띠콜로 장미꽃 편지지 LED 무드등 ] 로맨틱 홀로그램 여자 친구 기념일 고백 선물 특별한 여친 생일 선물 꽃다발, 블루+편지지",
    discount: null,
    price: 15000,
    badge: "jet_delivary",
    review_score: 5,
    review_count: 51,
  },
  {
    img: related_Ads_Item_02,
    title:
      "[ 전국 당일 3시간 배송 ] 꽃다발 / 꽃바구니 전지역 3시간 배송! 전국꽃배달 (주)화신플라워, 13. 핑크톤바구니",
    discount: null,
    price: 40000,
    badge: "null",
    review_score: 5,
    review_count: 12,
  },
  {
    img: related_Ads_Item_03,
    title: "LED 이터널로즈 프리저브드 플라워 무드등 2종, Red&beauty 13cm",
    discount: null,
    price: 21900,
    badge: "null",
    review_score: 5,
    review_count: 55,
  },
  {
    img: related_Ads_Item_04,
    title:
      "떡케이크 비누꽃다발 선물세트 ( 평일 15시이전 주문 당일출고-상세페이지 참고 ) 칠순 생일 기념 승진, 떡케이크 (원)C + 꽃다발",
    discount: null,
    price: 44900,
    badge: "null",
    review_score: 5,
    review_count: 72,
  },
  {
    img: related_Ads_Item_05,
    title: "신비즈 장미 조화 부케 12송이 2p, 화이트핑크 2p",
    discount: null,
    price: 15000,
    badge: "jet_delivary",
    review_score: 5,
    review_count: 11,
  },
  {
    img: related_Ads_Item_06,
    title: "프레시가든 공기정화식물 안스리움+해초바구니 세트, 레드",
    discount: null,
    price: 38900,
    badge: "rocket_fresh",
    review_score: 5,
    review_count: 420,
  },
  {
    img: related_Ads_Item_07,
    title: "스칸디아모스 인테리어 편백나무화분, 04_모스그린",
    discount: null,
    price: 19500,
    badge: "null",
    review_score: 5,
    review_count: 22,
  },
  {
    img: related_Ads_Item_08,
    title: "이벤트용 시들지않는 안개꽃다발, 핑크",
    discount: null,
    price: 36900,
    badge: "zet_delivary",
    review_score: 5,
    review_count: 88,
  },
  {
    img: related_Ads_Item_09,
    title: "동그리 토분, 19 cm",
    discount: null,
    price: 9350,
    badge: "null",
    review_score: 5,
    review_count: 79,
  },
  {
    img: related_Ads_Item_10,
    title:
      "핸드메이드 원목 플랜테리어 LED 밝기조절 무드등 사각 화분 이오난사, 멀바우브라운",
    discount: null,
    price: 56900,
    badge: "rocket_delivary",
    review_score: 5,
    review_count: 21,
  },
  {
    img: related_Ads_Item_11,
    title:
      "메이크정글 공기정화식물 디퓨저팟 고무나무 식물 기프트 세트, 네이비, 1세트",
    discount: null,
    price: 19000,
    badge: "rocket_fresh",
    review_score: 5,
    review_count: 296,
  },
  {
    img: related_Ads_Item_12,
    title: "나루플랜트 플라워베어 장미곰돌이 조화 로즈베어 여자친구 선물, 레드",
    discount: null,
    price: 28900,
    badge: "rocket_delivary",
    review_score: 5,
    review_count: 71,
  },
  {
    img: related_Ads_Item_13,
    title: "금장미 용돈박스 돈케이크 + 케이스 + 쇼핑백, 골드",
    discount: null,
    price: 36900,
    badge: "zet_delivary",
    review_score: 5,
    review_count: 22,
  },
  {
    img: related_Ads_Item_14,
    title: "스칸디아모스 포레스트 화분, 스프링그린",
    discount: null,
    price: 29700,
    badge: "zet_delivary",
    review_score: 5,
    review_count: 298,
  },
  {
    img: related_Ads_Item_15,
    title:
      "메이크정글 공기정화식물 디퓨저팟 호야 식물 기프트 세트, 옐로우, 1세트",
    discount: null,
    price: 19000,
    badge: "rocket_fresh",
    review_score: 5,
    review_count: 136,
  },
];

const Advertisement = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [back, setBack] = useState(false);

  const togglePlaying = () => setPlaying((prev) => !prev);

  const offset = 5;
  const totalItems = personalizedAdsItems.length;
  const maxIndex = Math.ceil(totalItems / offset) - 1;

  const prev = () => {
    setBack(true);
  };
  const next = () => {
    setBack(false);
  };

  const decreaseIndex = () => {
    if (playing) return;
    togglePlaying();
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };
  const increaseIndex = () => {
    if (playing) return;
    togglePlaying();
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const slides = {
    init: () => {
      // console.log(index, "나오는 방향", "back:", back, back ? -980 : 980);
      return { x: back ? -980 : 980 };
    },
    center: {
      x: 0,
    },

    exit: () => {
      // console.log(index, "사라지는 방향", "back:", back, back ? -980 : 980);
      return { x: back ? 980 : -980 };
    },
  };

  return (
    <article className={styles["personalized-ads"]}>
      <div className={styles["personalized-ads__contents"]}>
        <div className={styles["personalized-ads__title"]}>
          <span>오늘의 쇼핑 제안</span>
        </div>
        <div className={styles["personalized-ads__items"]}>
          <span
            onMouseEnter={prev}
            onClick={decreaseIndex}
            className={`${styles["personalized-ads__items-button"]} ${styles["prev"]}`}
          />
          <span
            onMouseEnter={next}
            onClick={increaseIndex}
            className={`${styles["personalized-ads__items-button"]} ${styles["next"]}`}
          />
          <AnimatePresence initial={false} onExitComplete={togglePlaying}>
            <motion.ul
              key={index}
              custom={{ back }}
              variants={slides}
              initial="init"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              className={styles["personalized-ads__items--ul"]}
            >
              {personalizedAdsItems
                .slice(offset * index, offset * index + offset)
                .map((item, itemIndex) => (
                  <AdsItems
                    key={itemIndex}
                    item_type="personalized"
                    img={item.img}
                    title={item.title}
                    discount={item.discount}
                    price={item.price}
                    badge={item.badge}
                    review_score={item.review_score}
                    review_count={item.review_count}
                  />
                ))}
            </motion.ul>
          </AnimatePresence>
        </div>
        <span className={styles["description"]}>광고</span>
      </div>

      <div className={styles["related-ads__contents"]}>
        <div className={styles["related-ads__title"]}>
          <span className={styles["related-ads__title-main"]}>
            지금 이 상품이 필요하신가요?
          </span>
          <span className={styles["related-ads__title-ads"]}>광고</span>
          <i className={styles["exclamation-mark"]}></i>
          <span className={styles["related-ads__title-pages"]}>
            <strong>1</strong>/3
          </span>
        </div>
        <div className={styles["related-ads__items"]}>
          <span
            className={`${styles["related-ads__items-button"]} ${styles["prev"]}`}
          />
          <span
            className={`${styles["related-ads__items-button"]} ${styles["next"]}`}
          />
          <ul>
            {relatedAdsItems
              .slice(offset * index, offset * index + offset)
              .map((item, itemIndex) => (
                <AdsItems
                  key={itemIndex}
                  item_type="related"
                  img={item.img}
                  title={item.title}
                  discount={item.discount}
                  price={item.price}
                  badge={item.badge}
                  review_score={item.review_score}
                  review_count={item.review_count}
                />
              ))}
          </ul>
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

export default Advertisement;

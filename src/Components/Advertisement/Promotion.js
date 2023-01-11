import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Promotion.module.css";
import AdsItems from "./AdsItems";

import promotionItem_01 from "../../assets/img/promotionItems/promotionItem01.jpg";
import promotionItem_02 from "../../assets/img/promotionItems/promotionItem02.jpg";
import promotionItem_03 from "../../assets/img/promotionItems/promotionItem03.jpg";
import promotionItem_04 from "../../assets/img/promotionItems/promotionItem04.jpg";
import promotionItem_05 from "../../assets/img/promotionItems/promotionItem05.jpg";
import promotionItem_06 from "../../assets/img/promotionItems/promotionItem06.png";
import promotionItem_07 from "../../assets/img/promotionItems/promotionItem07.jpg";
import promotionItem_08 from "../../assets/img/promotionItems/promotionItem08.jpeg";
import promotionItem_09 from "../../assets/img/promotionItems/promotionItem09.jpg";
import promotionItem_10 from "../../assets/img/promotionItems/promotionItem10.jpg";
import promotionItem_11 from "../../assets/img/promotionItems/promotionItem11.jpg";
import promotionItem_12 from "../../assets/img/promotionItems/promotionItem12.jpg";
import promotionItem_13 from "../../assets/img/promotionItems/promotionItem13.jpg";
import promotionItem_14 from "../../assets/img/promotionItems/promotionItem14.png";
import promotionItem_15 from "../../assets/img/promotionItems/promotionItem15.png";

const promotionItems = [
  {
    img: promotionItem_01,
    title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
    discount: 0,
    price: 16280,
    badge: null,
    review_score: 4.5,
    review_count: 555,
  },
  {
    img: promotionItem_02,
    title: "미완성잡화점 홈데코 빈티지 하이틴 감성 포스터 엽서 B 세트",
    discount: 40,
    price: 7110,
    badge: null,
    review_score: 5,
    review_count: 12,
  },
  {
    img: promotionItem_03,
    title:
      "[오후3시 당일발송] 일월 최신모델 23년형 초절전 워셔블 카본매트 70W 1인용 싱글 캠핑 침대 탄소매트 (90X180cm)",
    discount: 19,
    price: 44710,
    badge: "null",
    review_score: 4.5,
    review_count: 100,
  },
  {
    img: promotionItem_04,
    title:
      "갑조네 몬스테라아단소니 구멍몬스테라 오블리쿠아 공기정화식물 인테리어 화분 실내공기정화",
    discount: 66,
    price: 5100,
    badge: null,
    review_score: 4,
    review_count: 1570,
  },
  {
    img: promotionItem_05,
    title: "Modlauna 초고출력 헤어 드라이어 2000W, D087",
    discount: 41,
    price: 27140,
    badge: null,
    review_score: 4.5,
    review_count: 86,
  },
  {
    img: promotionItem_06,
    title:
      "촉촉하족 실리콘 발 뒷꿈치 보호 패드 힐링 보습 풋패드 남여공용, 양발 뒤꿈치패드(스킨) 1세트",
    discount: 26,
    price: 5010,
    badge: null,
    review_score: 4.5,
    review_count: 168,
  },
  {
    img: promotionItem_07,
    title: "듀얼하드 i7 게이밍 컴퓨터 롤 피파 배그 조립컴퓨터",
    discount: 13,
    price: 426810,
    badge: null,
    review_score: 4,
    review_count: 36,
  },
  {
    img: promotionItem_08,
    title: "행운스타 레이저펜 레이저 점 빼는 잡티 제거기 9단 조절 CG009",
    discount: 26,
    price: 15710,
    badge: null,
    review_score: 4.5,
    review_count: 19,
  },
  {
    img: promotionItem_09,
    title:
      "아란아트 귀여운일러스트그림액자 코끼리그림 부엉이그림 아이방꾸미기, 05 화목토끼",
    discount: 15,
    price: 13850,
    badge: null,
    review_score: 5,
    review_count: 51,
  },
  {
    img: promotionItem_10,
    title:
      "1+1 겨울 코듀로이 양털 슬리퍼 거실 실내화, 옐로우(여성), 그레이(남성)",
    discount: 29,
    price: 8410,
    badge: null,
    review_score: 4.5,
    review_count: 973,
  },

  {
    img: promotionItem_11,
    title:
      "HPT07 스틱형 미니 소형 휴대용 눈 마사지기 두피 목 안마기 포터블 진동기 안구마사지 지압건, 레드",
    discount: 10,
    price: 5890,
    badge: null,
    review_score: 4,
    review_count: 140,
  },
  {
    img: promotionItem_12,
    title:
      "세잔느화실 해바라기일러스트2 캔버스액자 풍수 해바라기 액자 풍수그림 그림액자 현관 거실 액자형 돈들어오는 그림",
    discount: 35,
    price: 14400,
    badge: null,
    review_score: 4.5,
    review_count: 1403,
  },
  {
    img: promotionItem_13,
    title: "쿠칭아일랜드 돈벼락 재물가득 부자되는 골드액자, 부자되는황금돈나무",
    discount: 52,
    price: 23650,
    badge: null,
    review_score: 5,
    review_count: 284,
  },
  {
    img: promotionItem_14,
    title:
      "쿠칭아일랜드 더커진 돈벼락 재물가득 부자되는 골드액자 40x60cm 돈나무액자, 큰부자되는황금돈나무",
    discount: 56,
    price: 38160,
    badge: null,
    review_score: 5,
    review_count: 66,
  },
  {
    img: promotionItem_15,
    title:
      "씨에카 똑딱이 단추 펀치 + 단추100개 세트 수선 단추펜치 단추달기 세트 DIY, 단추 펀치 + 단추 100개",
    discount: 18,
    price: 12580,
    badge: null,
    review_score: 4.5,
    review_count: 128,
  },
];

const Promotion = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [back, setBack] = useState(false);

  const togglePlaying = () => setPlaying((prev) => !prev);

  const offset = 5;
  const totalItems = promotionItems.length;
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
    <article className={styles["main"]}>
      <div className={styles["contents"]}>
        <div className={styles["title"]}>
          <span className={styles["title-main"]}>
            오늘의
            <span className={styles["title-emphatic"]}>판매자 특가</span>
          </span>
          <span className={styles["title-pages"]}>
            <strong>{index + 1}</strong>/3
          </span>
        </div>
        <span
          onMouseEnter={prev}
          onClick={decreaseIndex}
          className={`${styles["items-button"]} ${styles["prev"]}`}
        />
        <span
          onMouseEnter={next}
          onClick={increaseIndex}
          className={`${styles["items-button"]} ${styles["next"]}`}
        />
        <div className={styles["items"]}>
          <AnimatePresence initial={false} onExitComplete={togglePlaying}>
            <motion.ul
              key={index}
              custom={{ back }}
              variants={slides}
              initial="init"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.6 }}
              className={styles["items--ul"]}
            >
              {promotionItems
                .slice(offset * index, offset * index + offset)
                .map((item, itemIndex) => (
                  <AdsItems
                    key={itemIndex}
                    item_type="promotion"
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
      </div>
    </article>
  );
};

export default Promotion;

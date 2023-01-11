import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Trending.module.css";
import AdsItems from "./AdsItems";

import trendingItem_01 from "../../assets/img/trendingItems/trendingItem_01.jpg";
import trendingItem_02 from "../../assets/img/trendingItems/trendingItem_02.jpg";
import trendingItem_03 from "../../assets/img/trendingItems/trendingItem_03.jpg";
import trendingItem_04 from "../../assets/img/trendingItems/trendingItem_04.jpg";
import trendingItem_05 from "../../assets/img/trendingItems/trendingItem_05.jpg";

import trendingItem_06 from "../../assets/img/trendingItems/trendingItem_06.jpg";
import trendingItem_07 from "../../assets/img/trendingItems/trendingItem_07.jpg";
import trendingItem_08 from "../../assets/img/trendingItems/trendingItem_08.jpg";
import trendingItem_09 from "../../assets/img/trendingItems/trendingItem_09.jpg";
import trendingItem_10 from "../../assets/img/trendingItems/trendingItem_10.jpg";

import trendingItem_11 from "../../assets/img/trendingItems/trendingItem_11.jpg";
import trendingItem_12 from "../../assets/img/trendingItems/trendingItem_12.jpg";
import trendingItem_13 from "../../assets/img/trendingItems/trendingItem_13.jpg";
import trendingItem_14 from "../../assets/img/trendingItems/trendingItem_14.jpg";
import trendingItem_15 from "../../assets/img/trendingItems/trendingItem_15.jpg";

const trendingItems = [
  {
    img: trendingItem_01,
    title:
      "1+1비립종 아이 에센스 안티에이징 주름개선 에센스 아이 에센스 오일, 30m*4",
    discount: 26,
    price: 19100,
    badge: "free-delivary",
    review_score: 0,
    review_count: 0,
  },
  {
    img: trendingItem_02,
    title:
      "인메이블 성공을 부르는 액운막이 백호 백두산 호랑이 그림 22종 블랙메탈 액자 거실 인테리어 개업 선물, 25.[I]블랙 명예 호랑이, 블랙메탈액자",
    discount: 45,
    price: 101600,
    badge: "free-delivary",
    review_score: 5,
    review_count: 5,
  },
  {
    img: trendingItem_03,
    title: "세잔느화실 [캔버스액자]219.화려한 비구상들판2",
    discount: 51,
    price: 47800,
    badge: "free-delivary",
    review_score: 4,
    review_count: 23,
  },
  {
    img: trendingItem_04,
    title:
      "고려미술 명작 갤러리 말그림 팔마도 군마도 사업번창 부자되는 그림 풍수 인테리어 그림 캔버스 액자 18종, 12. 성공의 팔마도(와이드형)",
    discount: 0,
    price: 47500,
    badge: "free-delivary",
    review_score: 0,
    review_count: 0,
  },
  {
    img: trendingItem_05,
    title: "[코지마 본사] 칼더 익스트림 안마의자 CMC-L500(G), 브라운, CMC-L500",
    discount: 24,
    price: 1950000,
    badge: "free_delivary",
    review_score: 4.5,
    review_count: 111,
  },

  {
    img: trendingItem_06,
    title:
      "[인메이블] 금전운 황금 자작나무 와이드 8종 대형 캔버스 액자 그림 거실 풍수 인테리어 집들이 선물, 25.[I]황금빛 자작나무 숲, 소형[106x40cm]",
    discount: 44,
    price: 82900,
    badge: "free_delivary",
    review_score: 0,
    review_count: 0,
  },
  {
    img: trendingItem_07,
    title:
      "복을 부르는 동양 수묵 담채화 전통 민화 한국화 캔버스 액자 인테리어, 16.수묵 죽리청풍",
    discount: 0,
    price: 15900,
    badge: null,
    review_score: 5,
    review_count: 8,
  },
  {
    img: trendingItem_08,
    title:
      "고려미술 명작 갤러리 부귀화 목단 꽃 모란꽃 풍수인테리어 그림 캔버스액자 한국화 목단화 7종, 2. 한국화 목단 2송이",
    discount: 0,
    price: 125000,
    badge: "free_delivary",
    review_score: 5,
    review_count: 4,
  },
  {
    img: trendingItem_09,
    title:
      "2022 탄탄매트리스 미디엄싱글 기절 꿀잠 매트리스(바닥매트 메모리폼 롤업매트)",
    discount: 40,
    price: 99000,
    badge: null,
    review_score: 4,
    review_count: 31,
  },
  {
    img: trendingItem_10,
    title:
      "고려미술 명작 갤러리 인테리어 그림 추상화 바다 계곡 공작 소나무 송학도 힐링풍경화 캔버스액자, 3. 계곡 그림",
    discount: 50,
    price: 215000,
    badge: "free_delivary",
    review_score: 5,
    review_count: 1,
  },

  {
    img: trendingItem_11,
    title:
      "유니탑 대형그림 거실 사무실 2.4미터 대형 파노라마 부착식 흡음 액자, F 시리즈 (1780 x 880 mm), F-03 (1780 x 880 mm)",
    discount: 0,
    price: 120000,
    badge: "free_delivary",
    review_score: 5,
    review_count: 1,
  },
  {
    img: trendingItem_12,
    title: "쇼핑아트 부엉이 유화액자 D193B",
    discount: 53,
    price: 65800,
    badge: null,
    review_score: 4.5,
    review_count: 97,
  },
  {
    img: trendingItem_13,
    title:
      "2022 탄탄매트리스 퀸사이즈 기절 꿀잠 매트리스(바닥매트 메모리폼 롤업매트)",
    discount: 40,
    price: 208000,
    badge: null,
    review_score: 4.5,
    review_count: 122,
  },
  {
    img: trendingItem_14,
    title:
      "고려미술 명작 갤러리 감그림 포도그림 석류그림 수탉그림 게그림 재물 복 들어오는그림 캔버스액자, 3. 석류 그림",
    discount: 0,
    price: 18000,
    badge: "free_delivary",
    review_score: 4,
    review_count: 3,
  },
  {
    img: trendingItem_15,
    title:
      "제스파 컴포르테 안마의자 + 전용 러그 세트 방문설치, ZPC2033, 모던그레이",
    discount: 46,
    price: 1538000,
    badge: "rocket_install",
    review_score: 5,
    review_count: 3210,
  },
];

const TrendingAds = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [back, setBack] = useState(false);

  const togglePlaying = () => setPlaying((prev) => !prev);

  const offset = 5;
  const totalItems = trendingItems.length;
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
          <span>좋아할만한 카테고리 상품</span>
        </div>
        <div className={styles["items"]}>
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
              {trendingItems
                .slice(offset * index, offset * index + offset)
                .map((item, itemIndex) => (
                  <AdsItems
                    key={itemIndex}
                    item_type="trending"
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
    </article>
  );
};

export default TrendingAds;

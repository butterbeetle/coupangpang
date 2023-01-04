import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./RelatedAds.module.css";
import AdsItems from "./AdsItems";

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

const RelatedAds = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [back, setBack] = useState(false);

  const togglePlaying = () => setPlaying((prev) => !prev);

  const offset = 5;
  const totalItems = relatedAdsItems.length;
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
    <div className={styles["related-ads__contents"]}>
      <div className={styles["related-ads__title"]}>
        <span className={styles["related-ads__title-main"]}>
          지금 이 상품이 필요하신가요?
        </span>
        <span className={styles["related-ads__title-ads"]}>광고</span>
        <i className={styles["exclamation-mark"]}></i>
        <span className={styles["related-ads__title-pages"]}>
          <strong>{index + 1}</strong>/3
        </span>
      </div>
      <span
        onMouseEnter={prev}
        onClick={decreaseIndex}
        className={`${styles["related-ads__items-button"]} ${styles["prev"]}`}
      />
      <span
        onMouseEnter={next}
        onClick={increaseIndex}
        className={`${styles["related-ads__items-button"]} ${styles["next"]}`}
      />
      <div className={styles["related-ads__items"]}>
        <AnimatePresence initial={false} onExitComplete={togglePlaying}>
          <motion.ul
            key={index}
            custom={{ back }}
            variants={slides}
            initial="init"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.8 }}
            className={styles["related-ads__items--ul"]}
          >
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
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RelatedAds;

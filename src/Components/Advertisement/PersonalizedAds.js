import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./PersonalizedAds.module.css";
import AdsItems from "./AdsItems";

import personalized_Ads_Item_01 from "../../assets/img/personalizedAdsItems/personalized_Ads_Item_01.jpg";
import personalized_Ads_Item_02 from "../../assets/img/personalizedAdsItems/personalized_Ads_Item_02.jpg";
import personalized_Ads_Item_03 from "../../assets/img/personalizedAdsItems/personalized_Ads_Item_03.jpg";
import personalized_Ads_Item_04 from "../../assets/img/personalizedAdsItems/personalized_Ads_Item_04.png";
import personalized_Ads_Item_05 from "../../assets/img/personalizedAdsItems/personalized_Ads_Item_05.png";

import personalized_Ads_Item_06 from "../../assets/img/personalizedAdsItems/personalized_Ads_Item_06.jpg";
import personalized_Ads_Item_07 from "../../assets/img/personalizedAdsItems/personalized_Ads_Item_07.jpg";
import personalized_Ads_Item_08 from "../../assets/img/personalizedAdsItems/personalized_Ads_Item_08.jpg";
import personalized_Ads_Item_09 from "../../assets/img/personalizedAdsItems/personalized_Ads_Item_09.jpg";
import personalized_Ads_Item_10 from "../../assets/img/personalizedAdsItems/personalized_Ads_Item_10.jpg";

import personalized_Ads_Item_11 from "../../assets/img/personalizedAdsItems/personalized_Ads_Item_11.jpg";
import personalized_Ads_Item_12 from "../../assets/img/personalizedAdsItems/personalized_Ads_Item_12.jpg";
import personalized_Ads_Item_13 from "../../assets/img/personalizedAdsItems/personalized_Ads_Item_13.jpg";
import personalized_Ads_Item_14 from "../../assets/img/personalizedAdsItems/personalized_Ads_Item_14.jpg";
import personalized_Ads_Item_15 from "../../assets/img/personalizedAdsItems/personalized_Ads_Item_15.jpg";

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

const PersonalizedAds = () => {
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
            transition={{ type: "tween", duration: 0.6 }}
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
  );
};

export default PersonalizedAds;

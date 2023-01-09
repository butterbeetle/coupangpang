import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useInterval from "../../hooks/useInterval";
import styles from "./CategoryPromotion.module.css";

import best_title1 from "../../img/best_title/best_title_womanclothe2.png";
import womanClothes_00 from "../../assets/img/categoryBestUnit/womanClothes/womanClothes_00.jpg";
import womanClothes_01 from "../../assets/img/categoryBestUnit/womanClothes/womanClothes_01.jpg";
import womanClothes_02 from "../../assets/img/categoryBestUnit/womanClothes/womanClothes_02.jpg";
import womanClothes_03 from "../../assets/img/categoryBestUnit/womanClothes/womanClothes_03.jpg";
import womanClothes_04 from "../../assets/img/categoryBestUnit/womanClothes/womanClothes_04.jpg";
import womanClothes_05 from "../../assets/img/categoryBestUnit/womanClothes/womanClothes_05.jpg";
import womanClothes_06 from "../../assets/img/categoryBestUnit/womanClothes/womanClothes_06.jpg";
import womanClothes_07 from "../../assets/img/categoryBestUnit/womanClothes/womanClothes_07.png";

const UnitItems = [
  {
    url: "/",
    title: best_title1,
    thumnail: womanClothes_00,
    caption: {
      title: "여성 필수템, 원피스 할인",
      description: "1월 패션위크",
    },
  },
  {
    url: "/",
    title: best_title1,
    thumnail: womanClothes_01,
    caption: {
      title: "겨울 필수 패딩 점퍼 할인",
      description: "1월 패션위크",
    },
  },
  {
    url: "/",
    title: best_title1,
    thumnail: womanClothes_02,
    caption: {
      title: "신발 69% 추가 할인",
      description: "1월 패션위크",
    },
  },
  {
    url: "/",
    title: best_title1,
    thumnail: womanClothes_03,
    caption: {
      title: "여성의류 최대 68% 할인",
      description: "1월 패션위크",
    },
  },
  {
    url: "/",
    title: best_title1,
    thumnail: womanClothes_04,
    caption: {
      title: "모두의 클래식, 코트 할인",
      description: "1월 패션위크",
    },
  },
  {
    url: "/",
    title: best_title1,
    thumnail: womanClothes_05,
    caption: {
      title: "겨울 패션 할인 ~80%",
      description: "1월 패션위크",
    },
  },
  {
    url: "/",
    title: best_title1,
    thumnail: womanClothes_06,
    caption: {
      title: "가방&ACC 할인~80%",
      description: "1월 패션위크",
    },
  },
  {
    url: "/",
    title: best_title1,
    thumnail: womanClothes_07,
    caption: {
      title: "디자이너 브랜드 ~53%",
      description: "키르시 / 로라로라 / 리올그",
    },
  },
];

const CategoryPromotion = () => {
  const [btnHover, setBtnHover] = useState(false);
  const { count, start, stop, reset, resetNum } = useInterval(0, 2000);

  useEffect(() => {
    if (count > 7) {
      reset();
    }
    start();
  }, [count, reset, start]);

  const onMouseEnter = () => {
    setBtnHover(true);
    stop();
  };
  const onMouseLeave = () => {
    setBtnHover(false);
    start();
  };

  const increaseIndex = () => {
    resetNum((prev) => (prev === 7 ? 0 : prev + 1));
    stop();
  };
  const decreaseIndex = () => {
    resetNum((prev) => (prev === 0 ? 7 : prev - 1));
    stop();
  };

  let button = btnHover && (
    <>
      <span
        onClick={decreaseIndex}
        className={`${styles["button"]} ${styles["prev"]} `}
      />
      <span
        onClick={increaseIndex}
        className={`${styles["button"]} ${styles["next"]} `}
      />
    </>
  );

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={styles["promotion"]}
    >
      {button}
      <ul className={styles["promotion__thumnail"]}>
        {UnitItems.map((item, itemindex) => (
          <li
            key={itemindex}
            className={`${
              count === itemindex ? styles["active"] : styles["none"]
            }`}
          >
            <Link to="/">
              <img src={item.thumnail} alt="thumnail" />
            </Link>
            <span className={styles["promotion__caption"]}>
              <p className={styles["promotino__caption-title"]}>
                {item.caption.title}
              </p>
              <p className={styles["promotino__caption-description"]}>
                {item.caption.description}
              </p>
            </span>
          </li>
        ))}
      </ul>
      <ul className={styles["promotion__dot"]}>
        {UnitItems.map((item, itemindex) => (
          <li
            key={itemindex}
            className={` ${
              count === itemindex ? styles["selected"] : styles["dot"]
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPromotion;

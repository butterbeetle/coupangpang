import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useInterval from "../../hooks/useInterval";
import styles from "./CategoryPromotion.module.css";

const UnitItems = [
  {
    url: "/",
    caption: {
      title: "여성 필수템, 원피스 할인",
      description: "1월 패션위크",
    },
  },
  {
    url: "/",
    caption: {
      title: "겨울 필수 패딩 점퍼 할인",
      description: "1월 패션위크",
    },
  },
  {
    url: "/",
    caption: {
      title: "신발 69% 추가 할인",
      description: "1월 패션위크",
    },
  },
  {
    url: "/",
    caption: {
      title: "여성의류 최대 68% 할인",
      description: "1월 패션위크",
    },
  },
  {
    url: "/",
    caption: {
      title: "모두의 클래식, 코트 할인",
      description: "1월 패션위크",
    },
  },
  {
    url: "/",
    caption: {
      title: "겨울 패션 할인 ~80%",
      description: "1월 패션위크",
    },
  },
  {
    url: "/",
    caption: {
      title: "가방&ACC 할인~80%",
      description: "1월 패션위크",
    },
  },
  {
    url: "/",
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
  const onclick = (index) => {
    resetNum(index);
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
              <img
                src={require(`../../assets/img/categoryBestUnit/womanClothes/womanClothes_0${itemindex}.jpg`)}
                alt={`${itemindex}`}
              />
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
        {UnitItems.map((_, itemindex) => (
          <li
            onClick={() => onclick(itemindex)}
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

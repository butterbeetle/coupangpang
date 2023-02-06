import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useInterval from "../../hooks/useInterval";
import styles from "./CategoryPromotion.module.css";
import icons from "./ItemsIcon.module.css";

const items = {
  "woman-clothes": [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/00.png`),
      caption: {
        title: "해외 명품 브랜드 SALE",
        description: "코치 / 토리 버치 외 최대 80%",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/01.png`),
      caption: {
        title: "자주 봄 신상 미리보기",
        description: "파자마 / 라운지웨어 / 간절기 아우터",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/02.png`),
      caption: {
        title: "봄내음을 담은 빈폴 ACC",
        description: "가방 / 모자 / 지갑 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/03.jpg`),
      caption: {
        title: "가벼워진 스타일링 ~80%",
        description: "의류에서 슈즈, ACC까지",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/04.jpg`),
      caption: {
        title: "봄에 입기 좋은 패션 세일",
        description: "스포츠웨어 / 여성의류 / 신발 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/05.png`),
      caption: {
        title: "밸런타인데이 스타일링",
        description: "원피스 / 스커트 / 스웨터 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/06.png`),
      caption: {
        title: "주말 데이트룩 할인%",
        description: "블라우스/원피스 외 최대 80% 할인",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/07.png`),
      caption: {
        title: "데일리룩의 완성, 주얼리",
        description: "목걸이 / 팔찌 / 귀걸이 외",
      },
    },
  ],
  "man-clothes": [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/man-clothes/00.jpg`),
      caption: {
        title: "가벼워진 스타일링 ~80%",
        description: "의류에서 슈즈, ACC까지",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/man-clothes/01.png`),
      caption: {
        title: "기본 패션 아이템 ~30%",
        description: "맨투맨 / 슬랙스 / 청바지 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/man-clothes/02.jpg`),
      caption: {
        title: "데일리 스니커즈 컬렉션",
        description: "운동화 / 러닝화 / 슬립온 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/man-clothes/03.png`),
      caption: {
        title: "타미힐피거 캐주얼룩 ~52%",
        description: "카디건 / 원피스 / 셔츠",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/man-clothes/04.jpg`),
      caption: {
        title: "편하게 입는 캐주얼웨어",
        description: "맨투맨 / 후드집업 / 티셔츠 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/man-clothes/05.png`),
      caption: {
        title: "평일 출근룩으로 주말 골프",
        description: "골프 셔츠 / 니트 조끼 / 바지 외",
      },
    },
  ],
};
const CategoryPromotion = ({ category }) => {
  const [btnHover, setBtnHover] = useState(false);
  const { count, start, stop, reset, resetNum } = useInterval(0, 2000);
  const len = items[`${category}`].length - 1;
  useEffect(() => {
    if (count > len) {
      reset();
    }
    start();
  }, [count, reset, start, len]);

  const onMouseEnter = () => {
    setBtnHover(true);
    stop();
  };
  const onMouseLeave = () => {
    setBtnHover(false);
    start();
  };

  const increaseIndex = () => {
    resetNum((prev) => (prev === len ? 0 : prev + 1));
    stop();
  };
  const decreaseIndex = () => {
    resetNum((prev) => (prev === 0 ? len : prev - 1));
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
        {items[`${category}`].map((item, itemindex) => (
          <li
            key={itemindex}
            className={`${
              count === itemindex ? styles["active"] : styles["none"]
            }`}
          >
            <Link to="/">
              <img src={item.img} alt={`${itemindex}`} />
            </Link>
            <span
              className={`${styles["promotion__caption"]} ${
                icons[category + "-bgcolor"]
              }`}
            >
              <p className={styles["promotion__caption-title"]}>
                {item.caption.title}
              </p>
              <p className={styles["promotion__caption-description"]}>
                {item.caption.description}
              </p>
            </span>
          </li>
        ))}
      </ul>
      <ul className={styles["promotion__dot"]}>
        {items[`${category}`].map((_, itemindex) => (
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

import { useState } from "react";
import AdsItems from "../Advertisement/AdsItems";
import styles from "./CategoryItemList.module.css";

const items = {
  "woman-clothes": [
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      price: 16280,
      badge: "rocket_delivary",
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      discount_type: "즉시할인가",
      price: 16280,
      badge: "jet_delivary",
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      discount_type: "와우할인가",
      price: 16280,
      badge: null,
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      price: 16280,
      badge: "rocket_delivary",
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      discount_type: "와우할인가",
      price: 16280,
      badge: "jet_delivary",
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      discount_type: "즉시할인가",
      price: 16281,
      badge: "rocket_delivary",
      review_score: 4.5,
      review_count: 555,
    },

    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      price: 16280,
      badge: "rocket_delivary",
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      discount_type: "즉시할인가",
      price: 16280,
      badge: "jet_delivary",
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      discount_type: "와우할인가",
      price: 16280,
      badge: null,
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      price: 16280,
      badge: "rocket_delivary",
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      discount_type: "와우할인가",
      price: 16280,
      badge: "jet_delivary",
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      discount_type: "즉시할인가",
      price: 16282,
      badge: "rocket_delivary",
      review_score: 4.5,
      review_count: 555,
    },
  ],
  "man-clothes": [
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "s골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      price: 16280,
      badge: "rocket_delivary",
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "s골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      discount_type: "즉시할인가",
      price: 16280,
      badge: "jet_delivary",
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      discount_type: "와우할인가",
      price: 16280,
      badge: null,
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      price: 16280,
      badge: "rocket_delivary",
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      discount_type: "와우할인가",
      price: 16280,
      badge: "jet_delivary",
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      discount_type: "즉시할인가",
      price: 16281,
      badge: "rocket_delivary",
      review_score: 4.5,
      review_count: 555,
    },

    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      price: 16280,
      badge: "rocket_delivary",
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      discount_type: "즉시할인가",
      price: 16280,
      badge: "jet_delivary",
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      discount_type: "와우할인가",
      price: 16280,
      badge: null,
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      price: 16280,
      badge: "rocket_delivary",
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      discount_type: "와우할인가",
      price: 16280,
      badge: "jet_delivary",
      review_score: 4.5,
      review_count: 555,
    },
    {
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/1.png`),
      title: "골드해바라기 3송이, 5.골드 해바라기 세송이",
      discount: 0,
      discount_type: "즉시할인가",
      price: 16282,
      badge: "rocket_delivary",
      review_score: 4.5,
      review_count: 555,
    },
  ],
};
const CategoryItemList = ({ category }) => {
  const [btnHover, setBtnHover] = useState(false);
  const [index, setIndex] = useState(0);

  const offset = 6;
  const totalItems = items[`${category}`].length;
  const maxIndex = Math.ceil(totalItems / offset) - 1;

  const onMouseEnter = () => {
    setBtnHover(true);
  };
  const onMouseLeave = () => {
    setBtnHover(false);
  };

  const increaseIndex = () => {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };
  const decreaseIndex = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };
  const onclick = (index) => {
    setIndex(index);
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
      className={styles["items"]}
    >
      {button}
      <ul>
        {items[`${category}`]
          .slice(offset * index, offset * index + offset)
          .map((item, itemIndex) => (
            <AdsItems
              key={itemIndex}
              item_type="bestUnit"
              img={item.img}
              title={item.title}
              discount={item.discount}
              discount_type={item.discount_type}
              price={item.price}
              badge={item.badge}
              review_score={item.review_score}
              review_count={item.review_count}
            />
          ))}
      </ul>
      <ul className={styles["promotion__dot"]}>
        {items[`${category}`]
          .slice(offset * index, offset * index + offset)
          .map((_, itemindex) => (
            <li
              onClick={() => onclick(itemindex)}
              key={itemindex}
              className={` ${
                index === itemindex ? styles["selected"] : styles["dot"]
              }`}
            ></li>
          ))}
      </ul>
    </div>
  );
};

export default CategoryItemList;

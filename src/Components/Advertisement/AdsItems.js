import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AdsItems.module.css";

const AdsItems = ({
  item_type,
  img,
  title,
  discount,
  discount_type = null,
  price,
  badge,
  review_score,
  review_count,
}) => {
  const [isHover, setIsHover] = useState(false);
  const priceComma = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const score = review_score * 20 + "%";
  const count = review_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  let badgeStyles = null;

  switch (badge) {
    case null:
      break;
    case "free_delivery":
      badgeStyles = styles["badge-free"];
      break;
    case "rocket_buy":
      badgeStyles = styles["badge-rocket-buy"];
      break;
    case "rocket_delivery":
      badgeStyles = styles["badge-rocket-delivery"];
      break;
    case "rocket_install":
      badgeStyles = styles["badge-rocket-install"];
      break;
    default:
  }

  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };

  let discountJsx =
    item_type === "promotion" ? (
      <span className={styles["promotion-discount"]}>
        <span className={styles["promotion-discount-badge"]} />
        지금 {discount}% 할인 중
      </span>
    ) : (
      <span className={styles["discount"]}>
        <p>{discount}%</p>
      </span>
    );

  return (
    <li
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${styles[item_type + "-item"]}`}
    >
      <Link href="/">
        <div className={styles["infos"]}>
          <img src={img} alt="오늘의 쇼핑 제안1" />
          {discount > 0 && discountJsx}

          <div className={`${styles["info"]} ${styles[item_type + "-info"]}`}>
            <div
              className={`${styles["title"]} ${styles[item_type + "-title"]} 
              ${isHover ? styles[item_type + "-hover"] : null}`}
            >
              <span>{title}</span>
            </div>
            {item_type === "bestUnit" && (
              <div className={styles["discount-type"]}>{discount_type}</div>
            )}
            {item_type !== "personalized" && item_type !== "trending" && (
              <span
                className={`${styles["price-unit"]} ${
                  item_type === "bestUnit" ? styles["price-best"] : null
                }`}
              >
                <>
                  <span className={`${styles["price"]} `}>{priceComma}</span>원
                  {item_type !== "promotion" && (
                    <span className={`${styles[badge]}`} />
                  )}
                </>
              </span>
            )}

            {item_type !== "related" && item_type !== "bestUnit" && (
              <span className={`${badgeStyles}`}>
                {badge === "free_delivery" && "무료배송"}
              </span>
            )}
            {item_type !== "bestUnit" && (
              <div className={styles["review"]}>
                <span className={styles["empty-star"]}>
                  <span
                    className={styles["review-star"]}
                    style={{ width: score }}
                  />
                </span>
                <span className={styles["review-count"]}>({count})</span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default AdsItems;

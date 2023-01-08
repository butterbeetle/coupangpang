import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AdsItems.module.css";

const AdsItems = ({
  item_type,
  img,
  title,
  discount,
  price,
  badge,
  review_score,
  review_count,
}) => {
  const [hoverStyles, setHoverStyles] = useState("");
  const priceComma = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const score = review_score * 20 + "%";
  const count = review_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  let badgeStyles = null;

  switch (badge) {
    case null:
      break;
    case "free_delivary":
      badgeStyles = styles["badge-free"];
      break;
    case "rocket_buy":
      badgeStyles = styles["badge-rocket-buy"];
      break;
    case "rocket_delivary":
      badgeStyles = styles["badge-rocket-delivary"];
      break;
    case "rocket_install":
      badgeStyles = styles["badge-rocket-install"];
      break;
    default:
  }

  const onMouseEnter = () => {
    setHoverStyles(item_type + "-hover");
  };
  const onMouseLeave = () => {
    setHoverStyles(null);
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
              className={`${styles["title"]} ${styles[item_type + "-title"]} ${
                styles[hoverStyles]
              }`}
            >
              <span>{title}</span>
            </div>

            {item_type !== "personalized" && item_type !== "trending" && (
              <span className={`${styles["price-unit"]}`}>
                <>
                  <span className={`${styles["price"]} }`}>{priceComma}</span>원
                  {item_type !== "promotion" && (
                    <span className={`${styles[badge]}`} />
                  )}
                </>
              </span>
            )}

            {item_type !== "related" && (
              <span className={`${badgeStyles}`}>
                {badge === "free_delivary" && "무료배송"}
              </span>
            )}
            <div className={styles["review"]}>
              <span className={styles["empty-star"]}>
                <span
                  className={styles["review-star"]}
                  style={{ width: score }}
                />
              </span>
              <span className={styles["review-count"]}>({count})</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default AdsItems;

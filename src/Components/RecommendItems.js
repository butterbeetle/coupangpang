import { Link } from "react-router-dom";
import styles from "./RecommendItems.module.css";

const RecommendItems = ({
  img,
  title,
  discount,
  price,
  badge,
  review_score,
  review_count,
}) => {
  const priceComma = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const score = review_score * 20 + "%";
  const count = review_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  let badgeStyles = null;
  let freeStyles = null;

  // console.log(badge, badgeStyles);
  switch (badge) {
    case null:
      break;
    case "free_delivary":
      freeStyles = styles["recommend_item-free"];
      break;
    case "rocket_buy":
      badgeStyles = styles["recommend_item-rocket-buy"];
      break;
    case "rocket_delivary":
      badgeStyles = styles["recommend_item-rocket-delivary"];
      break;
    case "rocket_install":
      badgeStyles = styles["recommend_item-rocket-install"];
      break;
    default:
  }
  return (
    <li className={styles["recommend__item"]}>
      <Link href="/">
        <div className={styles["recommend__item-infos"]}>
          <img src={img} alt="오늘의 쇼핑 제안1" />
          {discount && (
            <span className={styles["recommend__item-discount"]}>
              <p>{discount}%</p>
            </span>
          )}
          <div className={styles["recommend__item-info"]}>
            <span className={styles["recommend__item-title"]}>{title}</span>

            {badge === null && (
              <span className={`${styles["recommend_item-price-unit"]}`}>
                <>
                  <span className={`${styles["recommend_item-price"]} }`}>
                    {priceComma}
                  </span>
                  원
                  <span className={styles["recommend_item-delivary"]} />
                </>
              </span>
            )}

            {badge !== null && (
              <span className={`${badgeStyles}  ${freeStyles}`}>
                {badge === "free_delivary" && "무료배송"}
              </span>
            )}
            <div className={styles["recommend__item-review"]}>
              <span className={styles["empty-star"]}>
                <span
                  className={styles["review-star"]}
                  style={{ width: score }}
                />
              </span>
              <span className={styles["recommend__item-review-count"]}>
                ({count})
              </span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default RecommendItems;

import { Link } from "react-router-dom";
import styles from "./RecommendItems.module.css";

const RecommendItems = ({
  img,
  title,
  discount,
  price,
  delivary_type,
  review_score,
  review_count,
}) => {
  const score = review_score * 20 + "%";
  const count = review_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  let badge = null;

  switch (delivary_type) {
    case "free":
      break;
    case "rocket_buy":
      badge = styles["recommend_item-rocket-buy"];
      break;
    case "rocket_delivary":
      badge = styles["recommend_item-rocket-delivary"];
      break;
    case "rocket_install":
      badge = styles["recommend_item-rocket-install"];
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
            {badge === null ? (
              <span className={styles["recommend_item-price-unit"]}>
                <span className={`${styles["recommend_item-price"]} }`}>
                  {price}
                </span>
                원
                <span className={styles["recommend_item-delivary"]} />
              </span>
            ) : (
              <span className={badge} />
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

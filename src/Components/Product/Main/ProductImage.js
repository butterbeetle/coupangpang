import { useState } from "react";
import ReactImageZoom from "react-image-zoom";
import { useSelector } from "react-redux";
import styles from "./ProductImage.module.css";

const ProductImage = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const urlArray = useSelector((state) => state.prod.thumbnailUrl);

  const opt = {
    width: 410,
    height: 410,
    zoomWidth: 400,
    offset: { vertical: 0, horizontal: 5 },
  };

  const hoverHandler = (id) => {
    setImgIndex((prev) => (prev = id));
  };
  return (
    <div className={styles["product__images"]}>
      {urlArray.map((item, idx) => (
        <div key={idx}>
          <div
            className={styles["product__image"]}
            key={idx}
            onMouseEnter={() => hoverHandler(idx)}
          >
            <div className={`${styles["product__image--small"]} `}>
              <img src={item.url} alt={`item${idx}`} />
              <i className={`${imgIndex === idx ? styles["border"] : ""}`} />
            </div>
          </div>
          <div
            className={`${styles["product__image--big"]} ${
              imgIndex === idx ? styles["active"] : ""
            }`}
          >
            <img src={item.url} alt={`item${idx}`} />
          </div>
          <div
            className={`${styles["product__image--zoom"]} ${
              imgIndex === idx ? styles["active"] : ""
            }`}
          >
            <ReactImageZoom {...opt} img={item.url} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductImage;

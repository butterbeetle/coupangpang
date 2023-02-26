import { useState } from "react";
import ReactImageZoom from "react-image-zoom";
import styles from "./ProductImage.module.css";

const imgs = [
  { id: 0, src: require(`../../assets/img/test/test.jpg`) },
  { id: 1, src: require(`../../assets/img/test/test1.jpg`) },
  { id: 2, src: require(`../../assets/img/test/test2.jpg`) },
  { id: 3, src: require(`../../assets/img/test/test3.jpg`) },
  { id: 4, src: require(`../../assets/img/test/test4.jpg`) },
  { id: 5, src: require(`../../assets/img/test/test5.jpg`) },
  { id: 6, src: require(`../../assets/img/test/test6.jpg`) },
  { id: 7, src: require(`../../assets/img/test/test7.jpg`) },
];

const ProductImage = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const props = {
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
      {imgs.map(({ id, src }) => (
        <>
          <div
            className={styles["product__image"]}
            key={id}
            onMouseEnter={() => hoverHandler(id)}
          >
            <div className={`${styles["product__image--small"]} `}>
              <img src={src} alt={`item${id}`} />
              <i className={`${imgIndex === id ? styles["border"] : ""}`} />
            </div>
          </div>
          <div
            className={`${styles["product__image--big"]} ${
              imgIndex === id ? styles["active"] : ""
            }`}
          >
            <img src={src} alt={`item${id}`} />
          </div>
          <div
            className={`${styles["product__image--zoom"]} ${
              imgIndex === id ? styles["active"] : ""
            }`}
          >
            <ReactImageZoom {...props} img={src} />
          </div>
        </>
      ))}
    </div>
  );
};

export default ProductImage;

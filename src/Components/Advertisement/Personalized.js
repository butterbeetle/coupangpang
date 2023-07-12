import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Personalized.module.css";
import AdsItems from "./AdsItems";

import { useSelector } from "react-redux";

const Personalized = () => {
  /* 상품 */
  const { allProdData } = useSelector((state) => state.prod);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [back, setBack] = useState(false);

  const togglePlaying = () => setPlaying((prev) => !prev);

  const offset = 5;
  const totalItems = allProdData?.length;
  const maxIndex = Math.ceil(totalItems / offset) - 1;

  const onSetBack = (e) => {
    setBack(e);
  };
  const decreaseIndex = () => {
    if (playing) return;
    togglePlaying();
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };
  const increaseIndex = () => {
    if (playing) return;
    togglePlaying();
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const slides = {
    init: () => {
      return { x: back ? -980 : 980 };
    },

    center: {
      x: 0,
    },

    exit: () => {
      return { x: back ? 980 : -980 };
    },
  };

  return (
    <article className={styles["main"]}>
      <div className={styles["contents"]}>
        <div className={styles["title"]}>
          <span>오늘의 쇼핑 제안</span>
        </div>
        <div className={styles["items"]}>
          <span
            onMouseEnter={() => onSetBack(true)}
            onClick={decreaseIndex}
            className={`${styles["items-button"]} ${styles["prev"]}`}
          />
          <span
            onMouseEnter={() => onSetBack(false)}
            onClick={increaseIndex}
            className={`${styles["items-button"]} ${styles["next"]}`}
          />
          <AnimatePresence initial={false} onExitComplete={togglePlaying}>
            <motion.ul
              key={index}
              custom={{ back }}
              variants={slides}
              initial="init"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.8 }}
              className={styles["items--ul"]}
            >
              {allProdData
                .slice(offset * index, offset * index + offset)
                .map((item) => (
                  <AdsItems
                    key={item.id}
                    item_type="personalized"
                    img={item.thumbnail}
                    url={item.id}
                    title={item.data.title}
                    discount={item.data.discount}
                    price={item.data.price}
                    review_score={5}
                    review_count={5}
                  />
                ))}
            </motion.ul>
          </AnimatePresence>
        </div>
        <span className={styles["description"]}>광고</span>
      </div>
    </article>
  );
};

export default Personalized;

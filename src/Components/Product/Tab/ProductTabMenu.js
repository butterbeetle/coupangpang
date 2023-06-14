import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./ProductTabMenu.module.css";

const ProductTabMenu = ({ refArray }) => {
  const ulRef = useRef();
  const [scroll, setScroll] = useState(0);
  const [scrollAct, setScrollAct] = useState(false);

  const scrollFixed = useCallback(() => {
    if (scroll > 900) {
      setScroll(window.scrollY);
      setScrollAct(true);
    } else {
      setScroll(window.scrollY);
      setScrollAct(false);
    }
  }, [scroll]);

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", scrollFixed);
    };
    scrollListener();

    return () => {
      window.removeEventListener("scroll", scrollFixed);
    };
  }, [scrollFixed]);

  const onClick = (idx) => {
    refArray.current[idx].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <ul
      className={`${styles["tab-menu"]} ${scrollAct ? styles["fixed"] : ""}`}
      ref={ulRef}
    >
      <li onClick={() => onClick(0)}>상품상세</li>
      <li onClick={() => onClick(1)}>상품평</li>
      <li onClick={() => onClick(2)}>상품문의</li>
      <li onClick={() => onClick(3)}>배송/교환/반품 안내</li>
    </ul>
  );
};

export default ProductTabMenu;

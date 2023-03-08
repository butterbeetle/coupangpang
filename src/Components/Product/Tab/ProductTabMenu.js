import styles from "./ProductTabMenu.module.css";

const ProductTabMenu = () => {
  return (
    <ul className={styles["tab__menu"]}>
      <li>상품상세</li>
      <li>상품평</li>
      <li>상품문의</li>
      <li>배송/교환/반품 안내</li>
    </ul>
  );
};

export default ProductTabMenu;

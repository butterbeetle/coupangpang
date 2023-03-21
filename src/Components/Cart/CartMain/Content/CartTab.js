import styles from "./CartTab.module.css";

const CartTab = () => {
  return (
    <ul className={styles["tab"]}>
      <li>일반구매 (1)</li>
      <li>정기배송 (0)</li>
    </ul>
  );
};

export default CartTab;

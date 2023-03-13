import styles from "./CartSelect.module.css";

const CartSelect = () => {
  return (
    <div className={styles["select"]}>
      <div className={styles["select__check"]}>
        <input type="checkbox" />
        전체선택
        <span className={styles["cur__total"]}>( 0 / 1 )</span>
      </div>
      <div className={styles["select__all"]}>전체삭제</div>
      <div className={styles["select__soldOut"]}>
        품절/판매종료상품 전체삭제
      </div>
    </div>
  );
};

export default CartSelect;

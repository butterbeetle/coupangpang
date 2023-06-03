import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["receive__header"]}>
      <h2>새벽배송 수령방법</h2>
      <p>필수입력사항</p>
    </div>
  );
};

export default Header;

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["alarm__header"]}>
      <h2>새벽배송 문자알림</h2>
      <p>필수입력사항</p>
    </div>
  );
};

export default Header;

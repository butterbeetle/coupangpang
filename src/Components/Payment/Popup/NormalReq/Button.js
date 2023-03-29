import styles from "./Button.module.css";

const Button = () => {
  return (
    <button className={styles["button"]} type="button">
      동의하고 저장하기
    </button>
  );
};

export default Button;

import styles from "./Button.module.css";

const Button = () => {
  return (
    <button className={styles["button"]} type="submit">
      저장
    </button>
  );
};

export default Button;

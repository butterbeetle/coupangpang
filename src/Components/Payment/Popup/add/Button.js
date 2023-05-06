import styles from "./Button.module.css";
/* Hook */
import { useLocation } from "react-router-dom";

const Button = () => {
  const { state } = useLocation();
  console.log(state?.id);
  return (
    <div>
      <button className={styles["button"]} type="submit">
        저장
      </button>
      {state?.id && (
        <button
          className={`${styles["button"]} ${styles["delete"]}`}
          type="button"
        >
          삭제
        </button>
      )}
    </div>
  );
};

export default Button;

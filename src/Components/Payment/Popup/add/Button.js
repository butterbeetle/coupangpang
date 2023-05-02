import styles from "./Button.module.css";
/* Hook */
import { useParams } from "react-router-dom";

const Button = () => {
  const params = useParams();
  return (
    <div>
      <button className={styles["button"]} type="submit">
        저장
      </button>
      {params && (
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

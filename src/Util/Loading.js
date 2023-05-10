import styles from "./Loading.module.css";

import { CgSpinner } from "@react-icons/all-files/cg/CgSpinner.esm";

const LoadingSpinner = () => {
  return (
    <div className={styles["loading"]}>
      <CgSpinner />
    </div>
  );
};

export default LoadingSpinner;

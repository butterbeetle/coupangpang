import styles from "./Loading.module.css";

import { ImSpinner3 } from "@react-icons/all-files/im/ImSpinner3";

const Loading = () => {
  return (
    <div className={styles["loading"]}>
      <ImSpinner3 />
    </div>
  );
};

export default Loading;

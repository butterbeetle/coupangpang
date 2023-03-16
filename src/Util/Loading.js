import styles from "./Loading.module.css";

import { ImSpinner3 } from "react-icons/im";
const Loading = () => {
  return (
    <div className={styles["loading"]}>
      <ImSpinner3 />
    </div>
  );
};

export default Loading;

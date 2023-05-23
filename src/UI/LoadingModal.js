import ReactDom from "react-dom";
import styles from "./LoadingModal.module.css";
import { CgSpinner } from "@react-icons/all-files/cg/CgSpinner.esm";

const LoadingModalOverlay = () => {
  return (
    <div className={styles["backdrop"]}>
      <div className={styles["loading"]}>
        <CgSpinner />
      </div>
    </div>
  );
};

const LoadingModal = () => {
  return ReactDom.createPortal(
    <LoadingModalOverlay />,
    document.getElementById("overlay-root")
  );
};

export default LoadingModal;

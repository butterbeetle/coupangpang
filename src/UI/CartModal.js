import { Fragment } from "react";
import ReactDom from "react-dom";
import styles from "./CartModal.module.css";

const CartBackdrop = ({ onClose }) => {
  return <div className={styles["backdrop"]} onClick={onClose} />;
};

const CartModalOverlay = ({ onClose }) => {
  return (
    <div className={styles["modal"]}>
      <div className={styles["modal__contents"]}>
        <strong>1개 이상의 상품</strong>을 선택해주세요.
      </div>
      <button type="button" onClick={onClose}>
        확인
      </button>
    </div>
  );
};

const CartModal = ({ onClose }) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <CartBackdrop onClose={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <CartModalOverlay onClose={onClose} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default CartModal;

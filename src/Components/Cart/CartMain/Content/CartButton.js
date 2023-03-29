import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartModal from "../../../../UI/CartModal";
import styles from "./CartButton.module.css";

const CartButton = () => {
  const checked = useSelector((state) => state.cart.checked);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const onClickHandler = () => {
    if (checked.length === 0) {
      setModalOpen("true");
    } else {
      navigate("/payment");
    }
  };

  const modalOpenHandler = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles["button"]}>
      {modalOpen && <CartModal onClose={modalOpenHandler} />}
      <Link className={styles["button__shopping"]} to="/">
        계속 쇼핑하기
      </Link>
      <button className={styles["button__buy"]} onClick={onClickHandler}>
        구매하기
      </button>
    </div>
  );
};

export default CartButton;

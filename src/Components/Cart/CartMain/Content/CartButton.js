import styles from "./CartButton.module.css";
import CartModal from "../../../../UI/CartModal";
/* Hook */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { buyAction } from "../../../../store/buy-slice";

const CartButton = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items);
  const checked = useSelector((state) => state.cart.checked);

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const onClickHandler = () => {
    if (checked.length === 0) {
      setModalOpen("true");
    } else {
      dispatch(
        buyAction.addToCurrentItems({
          items: cartItem?.filter((item) => checked?.includes(item.id)),
        })
      );
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

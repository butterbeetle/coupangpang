import styles from "./CartMain.module.css";

import CartMainHeader from "./Header/Cart-Main-Header";
import CartMainContent from "./Content/Cart-Main-Content";

const CartMain = () => {
  return (
    <main className={styles["main"]}>
      <div className={styles["contents"]}>
        <CartMainHeader step={2} />
        <CartMainContent />
      </div>
    </main>
  );
};

export default CartMain;

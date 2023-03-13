import Footer from "../../Layout/Footer";
import styles from "./CartView.module.css";

import CartHeader from "./CartHeader/CartHeader";
import CartMain from "./CartMain/CartMain";

const CartView = () => {
  return (
    <section className={styles["cart"]}>
      <CartHeader />
      <CartMain />
      <Footer />
    </section>
  );
};

export default CartView;

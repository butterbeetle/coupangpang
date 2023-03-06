import { Link } from "react-router-dom";
import Footer from "../../Layout/Footer";
import styles from "./CartView.module.css";

const CartView = () => {
  return (
    <section className={styles["cart"]}>
      <header className={styles["header"]}>
        <Link to="/">
          <span className={styles["logo"]} />
        </Link>
      </header>
      <main className={styles["main"]}>Cart Main</main>
      <Footer />
    </section>
  );
};

export default CartView;

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Receive.module.css";

const Receive = () => {
  return (
    <div className={styles["receive"]}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Receive;

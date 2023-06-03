import styles from "./SelectNormalReq.module.css";
import Location from "./Location";
import Opt from "./Opt";
import Button from "./Button";
import Message from "./Message";

const SelectNormalReq = () => {
  return (
    <div>
      <header className={styles["header"]}>배송 요청사항</header>
      <main className={styles["main"]}>
        <Message />
        <Location />
        <Opt />
        <Button />
      </main>
    </div>
  );
};

export default SelectNormalReq;

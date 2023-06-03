import styles from "./SelectDawnReq.module.css";

import Message from "../normal/Message";
import Alarm from "./Alarm/Alarm";
import Button from "./Button";
import Receive from "./Receive/Receive";

const SelectDawnReq = () => {
  return (
    <div>
      <header className={styles["header"]}>새벽배송 요청사항</header>
      <main className={styles["main"]}>
        <Message />
        <Receive />
        <Alarm />
        <Button />
      </main>
    </div>
  );
};

export default SelectDawnReq;

import styles from "./NormalReq.module.css";
import Location from "./Location";
import Opt from "./Opt";
import Button from "./Button";

const NormalReq = () => {
  return (
    <div>
      <header className={styles["header"]}>배송 요청사항</header>
      <main>
        <div className={styles["message"]}>
          사회적 거리두기를 위해, 모든 배송을 비대면으로 진행합니다.
          <br />
          ‘직접 받고 부재 시 문 앞’을 선택해도 문 앞으로 배송합니다.
        </div>
        <Location />
        <Opt />
        <Button />
      </main>
    </div>
  );
};

export default NormalReq;

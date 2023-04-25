import styles from "./showAddrData.module.css";

const ShowAddrData = () => {
  return (
    <div>
      <header className={styles["header"]}>배송지 선택</header>
      <div className={styles["container"]}>
        <main className={styles["main"]}>
          <div className={`${styles["card"]} `}>
            <div className={styles["main__header"]}>
              <p className={styles["name"]}>김승회</p>
            </div>
            <div className={styles["main__body"]}>
              <p className={styles["addr"]}>
                경기도 부천시 부천로90번길 63,201호
              </p>
              <p className={styles["phone"]}>010-8611-9303</p>
              <p className={styles["req"]}>문 앞</p>
            </div>
            <div className={styles["main__foot"]}>
              <div className={styles["update"]}>수정</div>
              <div className={styles["select"]}>선택</div>
            </div>
          </div>
          <div className={`${styles["card"]} ${styles["card-select"]}`}>
            <div className={styles["main__header"]}>
              <p className={styles["name"]}>김승회</p>
            </div>
            <div className={styles["main__body"]}>
              <p className={styles["addr"]}>
                경기도 부천시 부천로90번길 63,201호
              </p>
              <p className={styles["phone"]}>010-8611-9303</p>
              <p className={styles["req"]}>문 앞</p>
            </div>
            <div className={styles["main__foot"]}>
              <div className={styles["update"]}>수정</div>
              <div className={styles["select"]}>선택</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ShowAddrData;

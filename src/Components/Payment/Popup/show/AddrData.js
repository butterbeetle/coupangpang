import styles from "./AddrData.module.css";

const AddrData = ({ item }) => {
  const phone = item.phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  const normal = item.delivaryNormal ? item.delivaryNormal : "문 앞";
  const dawn = item.delivaryDawn ? item.delivaryDawn : "";

  return (
    <div className={`${styles["card"]} ${styles["card-select"]}`}>
      <div className={styles["main__header"]}>
        <p className={styles["name"]}>{item.name}</p>
      </div>
      <div className={styles["main__body"]}>
        {item.default_setting && (
          <p className={styles["default"]}>기본배송지</p>
        )}
        <p
          className={styles["addr"]}
        >{`${item.roadAddress}, ${item.detailAddress}`}</p>
        <p className={styles["phone"]}>{phone}</p>
        <p className={styles["req"]}>{`일반: ${normal} ${
          item.delivaryNormalReq ? "(" + item.delivaryNormalReq + ")" : ""
        } ${dawn ? " / 새벽: " + dawn : ""} ${
          item.delivaryDawnReq ? "(" + item.delivaryDawnReq + ")" : ""
        }`}</p>
      </div>
      <div className={styles["main__foot"]}>
        <div className={styles["update"]}>수정</div>
        <div className={styles["select"]}>선택</div>
      </div>
    </div>
  );
};

export default AddrData;

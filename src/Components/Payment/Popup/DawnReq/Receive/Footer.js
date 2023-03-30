import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["receive__foot"]}>
      <p>
        새벽 출입이 어려운 경우, 부득이하게 1층 현관 앞에 배송 드릴 수 있습니다.
      </p>
      <p>
        입력된 공동현관 출입번호는 쿠팡이 로켓배송을 위해 필요한 정보로, 향후
        배송을 위해 필요한 기간 동안 보관하는데 동의합니다.
      </p>
    </div>
  );
};

export default Footer;

import { useState } from "react";
import styles from "./PaymentPay.module.css";

const PaymentPay = () => {
  const [radio, setRadio] = useState("trans");
  const radioHandler = (e) => {
    setRadio(e.target.value);
  };
  return (
    <div className={styles["content"]}>
      <div className={styles["title"]}>
        <h3>결제정보</h3>
      </div>
      <div className={styles["customer"]}>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>총상품가격</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              19900원
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>배송비</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>0원</div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>총결제금액</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              19900원
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>결제방법</div>
          <div className={styles["customer__info__content"]}>
            <ul className={styles["customer__info__content__detail"]}>
              <li>
                <input
                  type="radio"
                  value={"trans"}
                  id="trans"
                  checked={radio === "trans"}
                  onChange={radioHandler}
                />
                <label
                  className={`${radio === "trans" ? styles["selected"] : null}`}
                  htmlFor="trans"
                >
                  계좌이체
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  value={"card"}
                  id="card"
                  checked={radio === "card"}
                  onChange={radioHandler}
                />
                <label
                  className={`${radio === "card" ? styles["selected"] : null}`}
                  htmlFor="card"
                >
                  신용카드
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  value={"vbank"}
                  id="vbank"
                  checked={radio === "vbank"}
                  onChange={radioHandler}
                />
                <label
                  className={`${radio === "vbank" ? styles["selected"] : null}`}
                  htmlFor="vbank"
                >
                  무통장입금(가상계좌)
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  value={"kakao"}
                  id="kakao"
                  checked={radio === "kakao"}
                  onChange={radioHandler}
                />
                <label
                  className={`${radio === "kakao" ? styles["selected"] : null}`}
                  htmlFor="kakao"
                >
                  카카오페이
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  value={"toss"}
                  id="toss"
                  checked={radio === "toss"}
                  onChange={radioHandler}
                />
                <label
                  className={`${radio === "toss" ? styles["selected"] : null}`}
                  htmlFor="toss"
                >
                  토스페이
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPay;

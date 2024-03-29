import styles from "./PaymentMethod.module.css";
/* Hook */
import { useState } from "react";
/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../../store/order-slice";

const PaymentMethod = () => {
  const dispatch = useDispatch();
  const { method } = useSelector((state) => state.order.currentItems);
  const [radio, setRadio] = useState(method);
  const radioHandler = (e) => {
    setRadio(e.target.value);
    dispatch(orderActions.addToCurrentItems({ method: e.target.value }));
  };
  return (
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
  );
};

export default PaymentMethod;

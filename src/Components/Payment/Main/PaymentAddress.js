import styles from "./PaymentAddress.module.css";
import { BsCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { popupActions } from "../../../store/popup-slice";
import { useEffect } from "react";
import { getAddrData } from "../../../store/address-action";
const PaymentAddress = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.logged.user);
  const addrData = useSelector((state) => state.addr.data);
  const addrLen = addrData.length;

  /* 접속 시 Firebase에 저장되어 있는지 확인해서 가져옴 */
  useEffect(() => {
    dispatch(getAddrData());
  }, [dispatch]);

  const popupHandler = () => {
    if (addrLen > 0) {
      console.log("show");
      dispatch(popupActions.move("show"));
    } else {
      console.log("add");
      dispatch(popupActions.move("add"));
    }
    const width = 510;
    const height = 650;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    window.open(
      "/addressbook",
      "배송지 추가",
      `width=${width},height=${height},left=${left},top=${top}`
    );
  };

  let addressData =
    addrLen > 0 ? (
      <div className={styles["customer"]}>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>이름</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              김승회
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>배송주소</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              butterbeetle@naver.com
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>연락처</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              010-8611-9303
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>
            <BsCheck className={styles["check"]} />
            배송 요청사항
          </div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              직접 받고 부재 시 문 앞
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className={styles["no-address"]}>
        저장되어 있는 배송지가 없습니다. 배송지를 추가해주세요.
      </div>
    );

  return (
    <div className={styles["content"]}>
      <div className={styles["title"]}>
        <h3>받는사람정보</h3>
        <button onClick={popupHandler}>
          배송지
          {addrLen > 0 ? "변경" : "추가"}
        </button>
      </div>
      {addressData}
    </div>
  );
};

export default PaymentAddress;

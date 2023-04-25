import styles from "./PaymentAddress.module.css";

import { BsCheck } from "@react-icons/all-files/bs/BsCheck";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAddrData } from "../../../store/address-action";

const PaymentAddress = () => {
  const dispatch = useDispatch();
  const addrData = useSelector((state) => state.addr.data);
  const addrLen = addrData.length;

  /* 접속 시 Firebase에 저장되어 있는지 확인해서 가져옴 */
  useEffect(() => {
    dispatch(getAddrData());
  }, [dispatch]);

  const popupHandler = () => {
    const width = 510;
    const height = 650;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    if (addrLen > 0) {
      window.open(
        "/addressbook/show",
        "배송지 선택",
        `width=${width},height=${height},left=${left},top=${top}`
      );
    } else {
      window.open(
        "/addressbook/add",
        "배송지 추가",
        `width=${width},height=${height},left=${left},top=${top}`
      );
    }
  };

  let addressData =
    addrLen > 0 ? (
      <div className={styles["customer"]}>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>이름</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              {addrData[0].name}
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>배송주소</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              {addrData[0].roadAddress}
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>연락처</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              {addrData[0].phone}
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
              일반 : ㅁㅁㅁ
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className={styles["no-address"]}>
        저장되어 있는 배송지가 없습니다. 배송지를 추가해주세요.
      </div>
    );

  console.log(addrData);
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

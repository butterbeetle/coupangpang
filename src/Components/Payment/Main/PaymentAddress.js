import styles from "./PaymentAddress.module.css";

import { BsCheck } from "@react-icons/all-files/bs/BsCheck";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAddrData } from "../../../store/address-action";

let init = true;
const PaymentAddress = () => {
  const dispatch = useDispatch();

  const [popup, setPopup] = useState(null);
  const [data, setData] = useState(null);
  const [defaultData, setDefaultData] = useState(null);

  const addrData = useSelector((state) => state.addr.data);
  const addrLen = addrData.length;

  /* 접속 시 Firebase에 저장되어 있는지 확인해서 가져옴 */
  useEffect(() => {
    dispatch(getAddrData());
  }, [dispatch]);

  /* 팝업 관리 */
  const popupHandler = () => {
    const width = 510;
    const height = 650;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    let popup = "";
    if (addrLen > 0) {
      popup = window.open(
        "/addressbook/show",
        "배송지 선택",
        `width=${width},height=${height},left=${left},top=${top}`
      );
    } else {
      popup = window.open(
        "/addressbook/add",
        "배송지 추가",
        `width=${width},height=${height},left=${left},top=${top}`
      );
    }
    setPopup(popup);
  };

  /* 팝업 닫힐 때 팝업창에서 메시지 받아오기 */
  useEffect(() => {
    if (!popup) return;

    const listener = (e) => {
      if (e.origin !== window.location.origin) return;

      setData(e.data.item);
    };

    popup.addEventListener("message", listener, false);

    return () => {
      popup.removeEventListener("message", listener);
      setPopup(null);
    };
  }, [popup]);

  useEffect(() => {
    if (init) {
      setDefaultData(
        addrData.filter((data) => data.default_setting) ?? addrData[0]
      );
    }
  }, [addrData]);

  let addressData =
    addrLen > 0 ? (
      <div className={styles["customer"]}>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>이름</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              {data?.name ?? defaultData[0]?.name}
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>배송주소</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              {data?.roadAddress ?? defaultData[0]?.roadAddress}
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>연락처</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              {data?.phone ?? defaultData[0]?.phone}
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

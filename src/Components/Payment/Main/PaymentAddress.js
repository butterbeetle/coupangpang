import styles from "./PaymentAddress.module.css";
/* Icon */
import { BsCheck } from "@react-icons/all-files/bs/BsCheck";
/* Hook */
import { useEffect, useState } from "react";
/* Redux */
import { useSelector } from "react-redux";
/* Util */
import LoadingSpinner from "../../../Util/Loading";

const PaymentAddress = () => {
  const addrData = useSelector((state) => state.addr.data);
  const addrLen = addrData.length;

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(null);
  const [popupData, setPopupData] = useState(null);
  const [defaultData, setDefaultData] = useState(null);

  /* 첫 접속 시 로딩 */
  useEffect(() => {
    setLoading(true);
  }, []);

  /* 데이터 변경시 마다 로딩 */
  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  /* addrData 변경 시 기본배송지 변경 */
  useEffect(() => {
    const filterData = addrData.filter((data) => data.default_setting);
    setDefaultData(
      (prev) =>
        (prev =
          filterData.length > 0 ? { ...filterData[0] } : { ...addrData[0] })
    );
  }, [addrData]);

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

  /* 팝업 닫힐 때 팝업창에서 데이터 받아오기 */
  useEffect(() => {
    if (!popup) return;

    const listener = (e) => {
      if (e.origin !== window.location.origin) return;
      if (e.data.item) {
        setLoading(true);
        setPopupData(e.data.item);
      }
    };

    popup.addEventListener("message", listener, false);

    return () => popup.removeEventListener("message", listener);
  }, [popup]);

  let addressData =
    addrLen > 0 ? (
      <div className={styles["customer"]}>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>이름</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              {popupData?.name ?? defaultData?.name}
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>배송주소</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              {popupData?.roadAddress ?? defaultData?.roadAddress}
            </div>
          </div>
        </div>
        <div className={styles["customer__info"]}>
          <div className={styles["customer__info__header"]}>연락처</div>
          <div className={styles["customer__info__content"]}>
            <div className={styles["customer__info__content__detail"]}>
              {popupData?.phone ?? defaultData?.phone}
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
      {loading && (
        <div className={styles["loading"]}>
          <LoadingSpinner />
        </div>
      )}
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

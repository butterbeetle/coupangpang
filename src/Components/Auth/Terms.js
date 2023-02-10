import { useEffect, useState } from "react";
import styles from "./Terms.module.css";

const terms = [
  {
    id: "age",
    required: true,
    text: "[필수] 만 14세 이상입니다",
    isCheck: false,
    isArrow: false,
  },
  {
    id: "service",
    required: true,
    text: "[필수] 쿠팡 이용약관 동의",
    isCheck: false,
    isArrow: true,
  },
  {
    id: "commerce",
    required: true,
    text: "[필수] 전자금융거래 이용약관 동의",
    isCheck: false,
    isArrow: true,
  },
  {
    id: "collection_userInfo",
    required: true,
    text: "[필수] 개인정보 수집 및 이용 동의",
    isCheck: false,
    isArrow: true,
  },
  {
    id: "collection_userInfo_thirdParty",
    required: true,
    text: "[필수] 개인정보 제3자 제공 동의",
    isCheck: false,
    isArrow: true,
  },
  {
    id: "marketing",
    required: false,
    text: "[선택] 마케팅 목적의 개인정보 수집 및 이용 동의",
    isCheck: false,
    isArrow: true,
  },
  {
    id: "SMS",
    required: false,
    text: "[선택] 광고성 정보 수신 동의",
    isCheck: false,
    isArrow: true,
  },
  {
    id: "SMS_email",
    required: false,
    text: "[선택] 이메일 수신 동의",
    isCheck: false,
    isArrow: false,
  },
  {
    id: "SMS_sms",
    required: false,
    text: "[선택] SMS, SNS 수신 동의",
    isCheck: false,
    isArrow: false,
  },
  {
    id: "SMS_app",
    required: false,
    text: "[선택] 앱 푸시 수신 동의",
    isCheck: false,
    isArrow: false,
  },
];

const Terms = () => {
  const [termItems, setTermItems] = useState(terms);
  // 모두 체크용
  const [all, setAll] = useState(false);

  useEffect(() => {
    const arr = [...termItems];
    if (arr.filter((item) => item.isCheck).length === termItems.length) {
      setAll(true);
    } else {
      setAll(false);
    }
  }, [termItems]);

  const allCheckHandler = () => {
    const arr = [...termItems];
    if (arr.filter((item) => item.isCheck).length === termItems.length) {
      arr.forEach((item) => (item.isCheck = false));
    } else {
      arr.forEach((item) => (item.isCheck = true));
    }
    setTermItems(arr);
  };

  const checkHadnler = (id) => {
    const arr = [...termItems];
    const index = termItems.findIndex((item) => item.id === id);
    arr[index].isCheck = !arr[index].isCheck;
    setTermItems(arr);
  };

  return (
    <section className={styles["main"]}>
      <div className={styles["all"]} onClick={allCheckHandler}>
        <i className={`${all ? styles["on"] : styles["off"]}`}></i>
        <p>모두 확인하였으며 동의합니다.</p>
      </div>
      <div className={styles["text"]}>
        <p>
          전체 동의에는 필수 및 선택 정보에 대한 동의가 포함되어 있으며,
          개별적으로 동의를 선택 하실 수 있습니다. 선택 항목에 대한 동의를
          거부하시는 경우에도 서비스 이용이 가능합니다
        </p>
      </div>
      {
        // <div className={styles["error"]}>
        //   <i className={styles["error--icon"]}></i>
        //   <p className={styles["error--text"]}>
        //     필수 항목에 모두 동의해주세요
        //   </p>
        // </div>
      }
      <div className={styles["terms"]}>
        <ul className={styles["items"]}>
          {termItems.map((item, idx) => (
            <li key={idx} className={styles["item"]}>
              <div className={styles["box"]}>
                <div
                  className={styles["check"]}
                  onClick={() => checkHadnler(item.id)}
                >
                  {item.isCheck ? (
                    <i className={styles["on"]}></i>
                  ) : (
                    <i className={styles["off"]}></i>
                  )}
                  <p>{item.text}</p>
                </div>
                {item.isArrow ? (
                  <button className={styles["arrow"]}></button>
                ) : (
                  ""
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Terms;

import { Fragment } from "react";
import ReactDom from "react-dom";
import styles from "./AuthModal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onConfirm} className={styles.backdrop} />;
};

const AuthModalOverlay = (props) => {
  let modalContent = (
    <div className={styles.error}>Something's wrong...(x_x)</div>
  );
  switch (props.modalType) {
    case "terms_service":
      modalContent = (
        <Fragment>
          <header className={styles.overlay__header}>
            <p>쿠팡 이용약관 동의</p>
            <i onClick={props.onConfirm}></i>
          </header>
          <main className={styles.overlay__main}>
            <div>
              [ 쿠팡 이용 약관 ] 제1장 총칙 제 1 조 (목적) 이 약관은 쿠팡
              주식회사(이하 “회사”)가 운영하는 사이버몰에서 제공하는 서비스와
              이를 이용하는 회원의 권리·의무 및 책임사항을 규정함을 목적으로
              합니다.
            </div>
          </main>
          <footer className={styles.overlay__footer}>
            <button onClick={props.onConfirm}>확인</button>
          </footer>
        </Fragment>
      );
      break;
    case "terms_commerce":
      modalContent = (
        <Fragment>
          <header className={styles.overlay__header}>
            <p>전자금융거래 이용약관 동의</p>
            <i onClick={props.onConfirm}></i>
          </header>
          <main className={styles.overlay__main}>
            <div>
              쿠팡페이㈜ 전자금융거래이용약관 제 1장. 총 칙 제1조(목적) 본
              약관은 쿠팡페이 주식회사(이하 "회사"라 합니다)가 제공하는
              전자지급결제대행서비스 및 결제대금예치서비스, 선불전자지급수단
              발행 및 관리 서비스(이하 통칭하여 “전자금융거래서비스”라 합니다)를
              이용자가 이용함에 있어 회사와 이용자 사이의 전자금융거래에 관한
              기본적인 사항을 정함을 목적으로 합니다.
            </div>
          </main>
          <footer className={styles.overlay__footer}>
            <button onClick={props.onConfirm}>확인</button>
          </footer>
        </Fragment>
      );
      break;
    case "terms_collection_userInfo":
      modalContent = (
        <Fragment>
          <header className={styles.overlay__header}>
            <p>개인정보 수집 및 이용 동의</p>
            <i onClick={props.onConfirm}></i>
          </header>
          <main className={styles.overlay__main}>
            <div>[필수] 개인정보 수집 및 이용 동의약관</div>
            <table className={styles["overlay__main--table"]}>
              <thead className={styles["overlay__main--thead"]}>
                <tr>
                  <th>항목</th>
                  <th>목적</th>
                  <th>보유 및 이용 기간</th>
                </tr>
              </thead>
              <tbody className={styles["overlay__main--tbody"]}>
                <tr>
                  <td>아이디(이메일), 이름, 휴대폰번호, 비밀번호</td>
                  <td>회원 가입 및 이용자 식별, 회원관리</td>
                  <td>회원탈퇴 시 90일간 보관 후 파기</td>
                </tr>
                <tr>
                  <td>
                    아이디(이메일), 이름, 휴대폰번호, 서비스 이용기록, 연령 및
                    성별
                  </td>
                  <td>개인화 서비스 제공</td>
                </tr>
                <tr>
                  <td>
                    부정행위 탐지된 아이디(이메일), 이름, 휴대폰번호, 부정행위
                    기록
                  </td>
                  <td>부정행위 방지</td>
                  <td>회원탈퇴 시 180일간 보관 후 파기</td>
                </tr>
              </tbody>
            </table>
          </main>
          <footer className={styles.overlay__footer}>
            <button onClick={props.onConfirm}>확인</button>
          </footer>
        </Fragment>
      );
      break;
    case "terms_collection_userInfo_thirdParty":
      break;
    case "terms_marketing":
      break;
    case "terms_SMS":
      break;
    default:
  }

  return <section className={styles.overlay}>{modalContent}</section>;
};

export const AuthModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <AuthModalOverlay
          onConfirm={props.onConfirm}
          modalType={props.modalType}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

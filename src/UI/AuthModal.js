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
            <div className={styles["overlay__main--header"]}>
              [필수] 개인정보 수집 및 이용 동의약관
            </div>
            <div className={styles["overlay__main--user"]}>
              <div className={styles["overlay__main--user--item"]}>항목</div>
              <div className={styles["overlay__main--user--item"]}>목적</div>
              <div className={styles["overlay__main--user--item"]}>
                보유 및 이용 기간
              </div>
              <div className={styles["overlay__main--user--item"]}>
                아이디(이메일), 이름, 휴대폰번호, 비밀번호
              </div>
              <div className={styles["overlay__main--user--item"]}>
                회원 가입 및 이용자 식별, 회원관리
              </div>
              <div className={styles["overlay__main--user--item"]}>
                회원탈퇴 시 90일간 보관 후 파기
              </div>
              <div className={styles["overlay__main--user--item"]}>
                아이디(이메일), 이름, 휴대폰번호, 서비스 이용기록, 연령 및 성별
              </div>
              <div className={styles["overlay__main--user--item"]}>
                개인화 서비스 제공
              </div>
              <div className={styles["overlay__main--user--item"]}>
                부정행위 탐지된 아이디(이메일), 이름, 휴대폰번호, 부정행위 기록
              </div>
              <div className={styles["overlay__main--user--item"]}>
                부정행위 방지
              </div>
              <div className={styles["overlay__main--user--item"]}>
                회원탈퇴 시 180일간 보관 후 파기
              </div>
            </div>
            <div className={styles["overlay__main--footer"]}>
              <p>
                연령 및 성별 정보는 회원 가입 이후 본인 확인을 진행한 이용자에
                한해 활용됩니다.
              </p>

              <p>
                동의를 거부할 수 있으나 동의 거부 시 서비스 이용이 제한됩니다.
              </p>
            </div>
          </main>
        </Fragment>
      );
      break;
    case "terms_collection_userInfo_thirdParty":
      modalContent = (
        <Fragment>
          <header className={styles.overlay__header}>
            <p>개인정보 제3자 제공 동의</p>
            <i onClick={props.onConfirm}></i>
          </header>
          <main className={styles.overlay__main}>
            <div className={styles["overlay__main--header"]}>
              [필수] 개인정보 제 3자 제공 동의에 대한 약관
            </div>
            <div className={styles["overlay__main--third"]}>
              <div className={styles["overlay__main--third--item"]}>
                개인정보 제공 받는 자
              </div>
              <div className={styles["overlay__main--third--item"]}>
                개인정보 제공 항목
              </div>
              <div className={styles["overlay__main--third--item"]}>
                개인정보 제공 목적
              </div>
              <div className={styles["overlay__main--third--item"]}>
                개인정보 이용 기간
              </div>
              <div className={styles["overlay__main--third--item"]}>
                쿠팡페이 주식회사
              </div>
              <div className={styles["overlay__main--third--item"]}>
                쿠팡 아이디
              </div>
              <div className={styles["overlay__main--third--item"]}>
                쿠팡캐시 서비스 제공
              </div>
              <div className={styles["overlay__main--third--item"]}>
                전자상거래법에 의해 5년간 보관 후 파기
              </div>
            </div>
            <div className={styles["overlay__main--footer"]}>
              <p>
                제공에 동의하지 않을 수 있으나, 동의하지 않으면 회원 가입에
                제한이 됩니다.
              </p>
            </div>
          </main>
        </Fragment>
      );
      break;
    case "terms_marketing":
      modalContent = (
        <Fragment>
          <header className={styles.overlay__header}>
            <p>마케팅 목적의 개인정보 수집 및 이용 동의</p>
            <i onClick={props.onConfirm}></i>
          </header>
          <main className={styles.overlay__main}>
            <div className={styles["overlay__main--header"]}>
              [선택] 마케팅 목적의 개인정보 수집 및 이용 동의
            </div>
            <div className={styles["overlay__main--user"]}>
              <div className={styles["overlay__main--user--item"]}>항목</div>
              <div className={styles["overlay__main--user--item"]}>목적</div>
              <div className={styles["overlay__main--user--item"]}>
                보유 및 이용 기간
              </div>
              <div className={styles["overlay__main--marketing--item"]}>
                서비스 이용기록, 연령 및 성별
              </div>
              <div className={styles["overlay__main--marketing--item"]}>
                인구통계학적 특성과 이용자의 관심 및 성향의 추정을 통한 맞춤형
                광고에 활용
              </div>
              <div className={styles["overlay__main--marketing--item"]}>
                동의 철회 시 맞춤형 광고 차단, 회원 탈퇴 시 파기
              </div>
              <div className={styles["overlay__main--marketing--item"]}>
                아이디(이메일), 휴대폰번호
              </div>
              <div className={styles["overlay__main--marketing--item"]}>
                쿠팡 아이디를 이용하는 서비스의 마케팅 및 프로모션
              </div>
              <div className={styles["overlay__main--marketing--item"]}>
                회원 탈퇴 시 파기
              </div>
            </div>
            <div className={styles["overlay__main--footer"]}>
              <p>
                연령 및 성별 정보는 회원 가입 이후 본인 확인을 진행한 이용자에
                한해 활용됩니다.
              </p>
              <p>
                동의를 거부할 수 있으며, 동의를 거부하셔도 서비스를 이용하실 수
                있습니다.
              </p>
            </div>
          </main>
        </Fragment>
      );
      break;
    case "terms_SMS":
      modalContent = (
        <Fragment>
          <header className={styles.overlay__header}>
            <p>광고성 정보 수신 동의</p>
            <i onClick={props.onConfirm}></i>
          </header>
          <main className={styles.overlay__main}>
            <div className={styles["overlay__main--header"]}>
              [선택] 광고성 정보 수신 동의
            </div>
            <div className={styles["overlay__main--sms"]}>
              <p>
                쿠팡은 회원님이 수집 및 이용에 동의한 개인정보를 이용하여
                SMS(MMS), SNS 메시지, 이메일, 푸시 알림 등 다양한 전자적 전송
                매체를 통해 오전 8시부터 오후 9시까지 개인 맞춤형 광고 및 정보를
                전송할 수 있습니다.{" "}
              </p>
              <p>
                본 동의는 거부하실 수 있으나, 거부 시 이벤트 및 프로모션 안내,
                유용한 광고를 받아보실 수 없습니다.{" "}
              </p>
              <p>광고성정보수신의 변경은</p>
              <p>
                {" "}
                1) 쿠팡 고객센터(1577-7011, <a href="/">help@coupang.com</a>)로
                요청하거나{" "}
              </p>
              <p>
                2) SMS, 이메일: 웹 브라우저에서 쿠팡에 로그인 {">"} 마이쿠팡{" "}
                {">"}
                MY정보(개인정보확인/수정) {">"} 수신설정{" "}
              </p>
              <p>3) SNS: 각 SNS의 설정 내 수신 차단 메뉴 </p>
              <p>
                4) 푸시알림: 쿠팡 앱 로그인{">"} 마이쿠팡{">"} 이름
                선택(내정보관리) {">"}
                푸시 설정에서 언제든지 변경할 수 있습니다.
              </p>
            </div>
          </main>
        </Fragment>
      );
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

import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer_nav}>
        <ul>
          <li>회사소개</li>
          <li>Investor Relations</li>
          <li>인재채용</li>
          <li>입점 / 제휴문의</li>
          <li>공지사항</li>
          <li>고객의 소리</li>
          <li>이용약관</li>
          <li>
            <strong>개인정보 처리방침</strong>
          </li>
          <li>쿠팡페이 이용약관</li>
          <li>
            <strong>쿠팡페이 개인정보처리방침</strong>
          </li>
          <li>신뢰관리센터</li>
          <li>제휴마케팅</li>
          <li>광고안내</li>
        </ul>
        <div className={styles.footer_nav__dropdown}>
          <p>Golbal Site {">"}</p>
        </div>
      </section>
      <section className={styles.footer_info}>
        <div className={styles.footer_info__etc}>
          <span alt="회색로고"></span>
          <div className={styles.footer_info__etc1}>
            <address>
              상호명 및 호스팅 서비스 제공 : 쿠팡(주)
              <br />
              대표이사 : 강한승,박대준
              <br />
              서울시 송파구 송파대로 570
              <br />
              사업자 등록번호 : 120-88-00767
              <br />
              통신판매업신고 : 2017-서울송파-0680
              <br />
              <a href="/">{"사업자정보 확인 >"}</a>
            </address>
          </div>
          <div className={styles.footer_info__etc2}>
            <a href="/" title="365고객센터">
              <strong>365고객센터</strong> | 전자금융거래분쟁처리담당
              <br />
              <span>1577-7011 (유료)</span>
              <br />
              서울시 송파구 송파대로 570
              <br />
              email : help@coupang.com
            </a>
          </div>
          <div className={styles.footer_info__etc3}>
            <p>
              <strong>우리은행 채무지급보증 안내</strong>
              <br />
              당사는 고객님이 현금 결제한 금액에 대해
              <br />
              우리은행과 채무지급보증 계약을 체결하여
              <br />
              안전거래를 보장하고 있습니다.
              <br />
              <a href="/">{"서비스 가입사실 확인 >"}</a>
            </p>
          </div>
        </div>
        <div className={styles.footer_info__logo}>
          <span alt="로고모음"></span>
        </div>
      </section>
      <section className={styles.footer_copyright}>
        <div>
          <p>
            사이버몰 내 판매되는 상품 중에는 쿠팡에 등록한 개별 판매자가
            판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
            <br />
            마켓플레이스(오픈마켓) 상품의 경우 쿠팡은 통신판매중개자이며
            통신판매의 당사자가 아닙니다.
            <br />
            쿠팡은 마켓플레이스(오픈마켓) 상품, 거래정보 및 거래 등에 대하여
            책임을 지지 않습니다.
            <br />
            쿠팡은 소비자 보호와 안전거래를 위해
            신뢰관리센터(CM112@coupang.com)를 운영하고 있으며, 관련 분쟁이
            발생할 경우 별도의 분쟁 처리절차에 의거 분쟁이 처리됩니다.
            <br />
            Copyright © Coupang Corp. 2010-2022 All Rights Reserved.
          </p>
          <ul className={styles.footer_copyright__logo}>
            <li>
              <Link to="/" title="쿠팡 페이스북"></Link>
            </li>
            <li>
              <Link href="/" title="쿠팡 뉴스룸"></Link>
            </li>
            <li>
              <Link href="/" title="쿠팡 인스타그램"></Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

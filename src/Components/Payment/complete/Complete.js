import styles from "./Complete.module.css";
/* Util */
import OrderFlow from "../../../Util/OrderFlow";

import test from "../../../assets/img/beauty.jpg";
import { Link } from "react-router-dom";

import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import { useState } from "react";

const OrderComplete = () => {
  const [openProdInfo, setOpenProdInfo] = useState(false);
  const openProdInfoHandler = () => {
    setOpenProdInfo((prev) => !prev);
  };
  return (
    <div className={styles["background"]}>
      <div className={styles["container"]}>
        <div className={styles["title"]}>
          <h3>주문완료</h3>
          <OrderFlow step={4} />
        </div>
        <div className={styles["thx"]}>
          <strong>주문이 완료</strong>되었습니다. 감사합니다!
        </div>
        <h3 className={styles["prod__header"]}>상품배송 정보</h3>
        <div className={styles["prod__container"]}>
          <div className={styles["prod__info"]}>
            <div>
              <strong>5/31(수) 도착 예정 (상품 1개)</strong> 판매자 :
              (주)교보문고
            </div>
            {!openProdInfo && <IoIosArrowDown onClick={openProdInfoHandler} />}
            {openProdInfo && <IoIosArrowUp onClick={openProdInfoHandler} />}
          </div>
          {openProdInfo && (
            <div className={styles["prod__main"]}>
              <img src={test} alt="" />
              <div className={styles["prod__main__text"]}>
                <p className={styles["prod__title"]}>
                  월드 오브 워크래프트: 아서스 리치왕의 탄생, 제우미디어,
                  크리스티 골든 저/구세희 역
                </p>
                <p className={styles["prod__price"]}>
                  <strong>13,320</strong>원
                </p>
                <p className={styles["prod__amount"]}>수량: 1개</p>
              </div>
            </div>
          )}
        </div>
        <div className={styles["infos"]}>
          <div className={styles["recipient"]}>
            <h3 className={styles["recipient__title"]}>받는사람 정보</h3>
            <div className={styles["recipient__name"]}>
              <div className={styles["name__title"]}>받는사람</div>{" "}
              <div className={styles["name__content"]}>
                김승회 / 010-1234-5678
              </div>
            </div>
            <div className={styles["recipient__addr"]}>
              <div className={styles["addr__title"]}>받는주소</div>
              <div className={styles["addr__content"]}>
                14571 경기도 부천시 원미동 126-5 복된주택 201호
              </div>
            </div>
            <div className={styles["recipient__req"]}>
              <div className={styles["req__title"]}>배송요청사항</div>
              <div className={styles["req__content"]}>
                직접 받고 부재 시 문 앞
              </div>
            </div>
          </div>
          <div className={styles["order"]}>
            <h3 className={styles["order__title"]}>결제 정보</h3>
            <div className={styles["order__price"]}>
              <div className={styles["price"]}>
                <div>주문금액</div> <div>13,320 원</div>
              </div>
              <div className={styles["delivary"]}>
                <div>배송비</div> <div>+0 원</div>
              </div>
            </div>
            <div className={styles["order__total"]}>
              <div className={styles["order__total-price"]}>총 결제금액</div>
              <div className={styles["order__method"]}>
                <div className={styles["method"]}>카드 / 일시불</div>
                <div className={styles["method-price"]}>15,820원</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["button"]}>
          <Link to="/">주문 상세보기</Link>
          <Link to="/">쇼핑 계속하기</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;

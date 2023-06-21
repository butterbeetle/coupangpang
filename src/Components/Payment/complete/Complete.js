import styles from "./Complete.module.css";
import { Link, useParams } from "react-router-dom";
/* Util */
import OrderFlow from "../../../Util/OrderFlow";
import LoadingModal from "../../../UI/LoadingModal";
import { dateFormat, phoneFormat } from "../../../Util/format";
/* Icon */
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
/* Hook */
import { useEffect, useState } from "react";
/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { getOrderedData } from "../../../store/order-action";
import Sidebar from "../../Home/Sidebar/Sidebar";
import { orderActions } from "../../../store/order-slice";

const OrderComplete = () => {
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const orderedItems = useSelector((state) => state.order.orderedItems[0]);
  const { day, month, date } = dateFormat(orderedItems?.date);
  const [loading, setLoading] = useState(false);
  const [openProdInfo, setOpenProdInfo] = useState(false);
  const openProdInfoHandler = () => {
    setOpenProdInfo((prev) => !prev);
  };
  /* 첫 접속 시 로딩 */
  useEffect(() => {
    setLoading(true);
    dispatch(orderActions.resetOrderedItems());
    dispatch(getOrderedData(orderId));
  }, [dispatch, orderId]);

  /* 2초 후 로딩 끝 */
  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  /**
   * method를 한글로 변환해주는 함수
   */
  const methodToString = (method) => {
    switch (method) {
      case "card":
        return "카드";
      case "kakao":
        return "카카오페이";
      case "toss":
        return "토스페이";
      case "vbank":
        return "가상계좌";
      case "trans":
        return "계좌이체";
      default:
        return "카드";
    }
  };

  return (
    <div className={styles["background"]}>
      {loading && <LoadingModal />}

      <div className={styles["container"]}>
        <div className={styles["test"]}>
          <Sidebar />
        </div>
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
              <strong>
                {`${month}/${date}(${day})`} 도착 예정 (상품
                {orderedItems?.items.length}개)
              </strong>
            </div>
            {!openProdInfo && <IoIosArrowDown onClick={openProdInfoHandler} />}
            {openProdInfo && <IoIosArrowUp onClick={openProdInfoHandler} />}
          </div>
          {openProdInfo &&
            orderedItems?.items.map((item) => (
              <div className={styles["prod__main"]} key={item.id}>
                <Link to={`/products/${item.id}`}>
                  <img src={item.thumbnail} alt="" loading="lazy" />
                </Link>
                <div className={styles["prod__main__text"]}>
                  <Link to={`/products/${item.id}`}>
                    <p className={styles["prod__title"]}>{item.name}</p>
                  </Link>
                  <p className={styles["prod__price"]}>
                    <strong>{item.totalPrice.toLocaleString()}</strong>원
                  </p>
                  <p className={styles["prod__amount"]}>
                    수량: {item.quantity}개
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className={styles["infos"]}>
          <div className={styles["recipient"]}>
            <h3 className={styles["recipient__title"]}>받는사람 정보</h3>
            <div className={styles["recipient__name"]}>
              <div className={styles["name__title"]}>받는사람</div>
              <div className={styles["name__content"]}>
                {`${orderedItems?.addr.name} / ${phoneFormat(
                  orderedItems?.addr.phone
                )}`}
              </div>
            </div>
            <div className={styles["recipient__addr"]}>
              <div className={styles["addr__title"]}>받는주소</div>
              <div className={styles["addr__content"]}>
                {`${orderedItems?.addr.zonecode} ${orderedItems?.addr.roadAddress}`}
              </div>
            </div>
            <div className={styles["recipient__req"]}>
              <div className={styles["req__title"]}>배송요청사항</div>
              <div className={styles["req__content"]}>
                {`${orderedItems?.addr.delivaryNormal}`}
              </div>
            </div>
          </div>
          <div className={styles["order"]}>
            <h3 className={styles["order__title"]}>결제 정보</h3>
            <div className={styles["order__price"]}>
              <div className={styles["price"]}>
                <div>주문금액</div>
                <div>
                  {`${orderedItems?.items
                    .reduce((acc, cur) => {
                      return (acc += cur.totalPrice);
                    }, 0)
                    .toLocaleString()}`}
                  원
                </div>
              </div>
              <div className={styles["delivary"]}>
                <div>배송비</div> <div>+0원</div>
              </div>
            </div>
            <div className={styles["order__total"]}>
              <div className={styles["order__total-price"]}>총 결제금액</div>
              <div className={styles["order__method"]}>
                <div className={styles["method"]}>
                  {`${methodToString(orderedItems?.method)}`} / 일시불
                </div>
                <div className={styles["method-price"]}>
                  {`${orderedItems?.items
                    .reduce((acc, cur) => {
                      return (acc += cur.totalPrice);
                    }, 0)
                    .toLocaleString()}`}
                  원
                </div>
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

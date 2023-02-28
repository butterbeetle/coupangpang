import styles from "./Product.module.css";
import ProductImage from "./ProductImage";
import { useParams } from "react-router";

/* 아이콘 */
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillShareFill, BsCoin, BsChatLeftText } from "react-icons/bs";
import { FiHeart, FiThumbsUp } from "react-icons/fi";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";

/* 테스트 이미지 */
import detail_image01 from "../../assets/img/test/test_detail1.jpg";
import detail_image02 from "../../assets/img/test/test_detail2.png";
import detail_image03 from "../../assets/img/test/test_detail3.png";
import { useState } from "react";

const Product = () => {
  const { productId } = useParams();
  const [seeMore, setSeeMore] = useState(false);
  const seeMoreHandler = () => {
    setSeeMore((prev) => !prev);
  };

  return (
    <section className={styles["product"]}>
      <div className={styles["product__main"]}>
        <div className={styles["product__category"]}>
          {"쿠팡 홈 > 식품 > 채소"}
        </div>
        <div className={styles["product__infos"]}>
          <ProductImage />
          <div className={styles["product__info"]}>
            <div className={styles["product__info--header"]}>
              <p className={styles["product__info--title"]}>
                진품인증 받은 해남고구마
              </p>
              <div className={styles["review"]}>
                <span className={styles["empty-star"]}>
                  <span
                    className={styles["review-star"]}
                    style={{ width: "80%" }}
                  />
                </span>
                <span className={styles["review--count"]}>1,865개 상품평</span>
              </div>
              <div className={styles["product__info--icon"]}>
                <div className={styles["heart"]}>
                  <FiHeart className={styles["heart--icon"]} />
                </div>
                <div className={styles["share"]}>
                  <BsFillShareFill className={styles["share--icon"]} />
                </div>
              </div>
            </div>
            <div className={styles["product__info--price"]}>
              <div className={styles["price__discount"]}>
                <p className={styles["price__discount__rate"]}>32%</p>
                <p className={styles["price__origin"]}>16,000원</p>
                <AiOutlineInfoCircle />
              </div>
              <div className={styles["price__sale"]}>
                <p className={styles["price__total"]}>13,000원</p>
                <p className={styles["price__info"]}>쿠팡판매가</p>
              </div>
              <div className={styles["price__coupon"]}>
                <p className={styles["price__total"]}>10,870원</p>
                <p className={styles["price__info"]}>와우할인가</p>
              </div>
              <div>
                <div className={styles["price__badge"]}>
                  <BsCoin />
                  <p>최대 544원 적립</p>
                </div>
              </div>
            </div>
            <div className={styles["product__info--delivary"]}>
              <p className={styles["delivary--type"]}>무료배송</p>
              <p className={styles["delivary--date"]}>금요일 3/3 도착 예정</p>
            </div>
            <div className={styles["product__info--seller"]}>
              <div className={styles["seller--personal"]}>
                <p className={styles["seller--title"]}>판매자:</p>
                <p className={styles["seller--name"]}>
                  (사)해남고구마생산자협회
                </p>
                <div className={styles["seller--prod"]} />
              </div>
              <div className={styles["seller--evaluation"]}>
                <p className={styles["seller--title"]}>판매자 평가</p>
                <FiThumbsUp className={styles["thumbs"]} />
                <p className={styles["evaluation--rate"]}>83%</p>
                <p className={styles["evaluation--count"]}>(19,329)</p>
                <AiOutlineInfoCircle className={styles["i"]} />
              </div>
            </div>
            <div className={styles["product__info--delivery--company"]}>
              배송사:
              <p>롯데택배</p>
            </div>
            <div className={styles["product__info--cash"]}>
              <div className={styles["cash__header"]}>
                <div className={styles["cash__title"]}>
                  <BsCoin />
                  <p>캐시적립 혜택</p>
                  <AiOutlineInfoCircle />
                </div>
                <div>
                  <p>
                    최대 <strong>544원</strong> 적립
                  </p>
                </div>
              </div>
              <div className={styles["cash__promotion"]}>
                <p>쿠페이 머니 결제 시 1% 적립</p>
                {/* <p>[로켓와우 + 쿠페이 계좌이체] 결제 시 2% 적립</p>
                <p>
                  [로켓와우 + 쿠페이 머니] 결제 시 4% 추가적립{" "}
                  <strong>2922일 남음</strong>
                </p> */}
                <button type="button">쿠페이 머니 충전하기</button>
              </div>
            </div>
            <div className={styles["product__info--buy"]}>
              <div className={styles["buy--amount"]}>
                <input type="text" value="1" />
                <div className={styles["button--bag"]}>
                  <button type="button">
                    <IoIosArrowUp />
                  </button>
                  <button type="button">
                    <IoIosArrowDown />
                  </button>
                </div>
              </div>
              <div className={styles["buy--cart"]}>
                <button type="button">장바구니 담기</button>
                <div></div>
                <button type="button">
                  바로 구매 <IoIosArrowForward />
                </button>
              </div>
            </div>
            <div className={styles["product__info--desc"]}>
              <ul>
                <li>쿠팡상품번호: {productId}</li>
              </ul>
            </div>
            <div className={styles["product__info--inquiry"]}>
              <BsChatLeftText />
              <p>상품정보에 문제가 있나요?</p>
            </div>
          </div>
        </div>
      </div>
      <div>{/* 함께 비교하면 좋을 상품 */}</div>
      <div className={styles["product__tab"]}>
        <ul className={styles["tab__title"]}>
          <li>상품상세</li>
          <li>상품평</li>
          <li>상품문의</li>
          <li>배송/교환/반품 안내</li>
        </ul>
        <ul className={styles["tab__contents"]}>
          <li className={styles["product__detail"]}>
            <div>
              <p className={styles["detail__title"]}>필수 표기정보</p>
              <div className={styles["detail__info"]}>
                <div className={styles["unit"]}>
                  <div>품목 또는 명칭</div>
                  <div>상품 상세페이지 참조</div>
                </div>
                <div className={styles["unit"]}>
                  <div>포장단위별 내용물의 용량(중량),수량,크기</div>
                  <div>상품 상세페이지 참조</div>
                </div>
                <div className={styles["unit"]}>
                  <div>생산자(수입자)</div>
                  <div>상품 상세페이지 참조</div>
                </div>
                <div className={styles["unit"]}>
                  <div>원산지</div>
                  <div>상품 상세페이지 참조</div>
                </div>
                <div className={styles["unit"]}>
                  <div>제조연월일, 소비기한 또는 품질유지기한</div>
                  <div>상품 상세페이지 참조</div>
                </div>
                <div className={styles["unit"]}>
                  <div>세부 품목군별 표시사항</div>
                  <div>상품 상세페이지 참조</div>
                </div>
                <div className={styles["unit"]}>
                  <div>수입식품 문구 여부</div>
                  <div>상품 상세페이지 참조</div>
                </div>
                <div className={styles["unit"]}>
                  <div>상품구성</div>
                  <div>상품 상세페이지 참조</div>
                </div>
                <div className={styles["unit"]}>
                  <div>보관방법,취급방법</div>
                  <div>상품 상세페이지 참조</div>
                </div>
                <div className={styles["unit"]}>
                  <div>소비자안전을 위한 주의사항</div>
                  <div>상품 상세페이지 참조</div>
                </div>
                <div className={styles["unit"]}>
                  <div>소비자상담관련 전화번호</div>
                  <div>상품 상세페이지 참조</div>
                </div>
              </div>
              {/* 필수 표기정보 더보기 만들곳 */}
            </div>
            <div className={styles["warning__banner"]}>
              <RiErrorWarningFill />
              판매자가 현금거래를 요구하면 거부하시고 즉시 사기 거래 신고센터
              (02-2621-4699)에 신고하시기 바랍니다.
            </div>
            <div className={styles["detail__images"]}>
              <div
                className={`${styles["detail__image"]} ${
                  seeMore ? "" : styles["hide__overflow"]
                }`}
              >
                <img src={detail_image01} alt="" />
                <img src={detail_image02} alt="" />
                <img src={detail_image03} alt="" />
              </div>
              <div className={styles["detail__more"]}>
                <div
                  onClick={seeMoreHandler}
                  className={styles["detail__more--button"]}
                >
                  상품정보 더보기
                  {seeMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Product;

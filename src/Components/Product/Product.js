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
          <li className={styles["contents__detail"]}>
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
          <li className={styles["contents__review"]}>
            <div className={styles["review__header"]}>
              <p>상품평 운영원칙</p>
              <p>상품평</p>
            </div>
            <div className={styles["review__main"]}>
              <div className={styles["review__nothing"]}>
                등록된 상품평이 없습니다.
              </div>
            </div>
          </li>
          <li className={styles["contents__enquiry"]}>
            <div className={styles["enquiry__main"]}>
              <div className={styles["enquiry__header"]}>
                <h4>상품문의</h4>
                <div className={styles["enquiry__button"]}>문의하기</div>
              </div>
              <div className={styles["enquiry__caution"]}>
                <ul>
                  <li>
                    구매한 상품의{" "}
                    <strong>취소/반품은 마이쿠팡 구매내역에서 신청</strong>{" "}
                    가능합니다.
                  </li>
                  <li>
                    상품문의 및 후기게시판을 통해 취소나 환불, 반품 등은
                    처리되지 않습니다.
                  </li>
                  <li>
                    <strong>
                      가격, 판매자, 교환/환불 및 배송 등 해당 상품 자체와 관련
                      없는 문의는 고객센터 내 1:1 문의하기
                    </strong>
                    를 이용해주세요.
                  </li>
                  <li>
                    <strong>
                      "해당 상품 자체"와 관계없는 글, 양도, 광고성, 욕설, 비방,
                      도배 등의 글은 예고 없이 이동, 노출제한, 삭제 등의 조치가
                      취해질 수 있습니다.
                    </strong>
                  </li>
                  <li>
                    공개 게시판이므로 전화번호, 메일 주소 등 고객님의 소중한
                    개인정보는 절대 남기지 말아주세요.
                  </li>
                </ul>
              </div>
              <div className={styles["enquiry__list"]}>
                <div className={styles["enquiry__nothing"]}>
                  등록된 문의가 없습니다.
                </div>
              </div>
              <div className={styles["enquiry__report"]}>
                판매 부적격 상품 또는 허위과장광고 및 지식재산권을 침해하는
                상품의 경우 신고하여 주시기 바랍니다.
                <div className={styles["enquiry__report--button"]}>
                  신고하기
                </div>
              </div>
            </div>
          </li>
          <li className={styles["contents__notice"]}>
            <div className={styles["notice__delivary__info"]}>
              <h5>배송정보</h5>
              <div className={styles["notice__grid"]}>
                <div className={styles["notice__item"]}>
                  <div className={styles["notice__title"]}>배송방법</div>
                  <div className={styles["notice__content"]}>
                    신선/냉장/냉동
                  </div>
                </div>
                <div
                  className={`${styles["notice__item"]} ${styles["row__2"]}`}
                >
                  <div className={styles["notice__title"]}>배송비</div>
                  <div className={styles["notice__content"]}>
                    무료배송
                    <br />
                    - 도서산간 추가 배송비
                    <br />
                    - 제주 지역: 5,000원
                    <br />
                    - 도서산간 지역: 5,000원
                    <br />
                  </div>
                </div>
                <div className={styles["notice__item"]}>
                  <div className={styles["notice__title"]}>배송사</div>
                  <div className={styles["notice__content"]}>로젠택배</div>
                </div>
                <div
                  className={`${styles["notice__item"]} ${styles["column__2"]}`}
                >
                  <div className={styles["notice__title"]}>묶음배송 여부</div>
                  <div className={styles["notice__content"]}>가능</div>
                </div>
              </div>
            </div>
            <div className={styles["notice__delivary__return"]}>
              <h5>교환/반품 안내</h5>
              <ul>
                <li>
                  ㆍ교환/반품에 관한 일반적인 사항은 판매자가 제시사항보다
                  관계법령이 우선합니다.
                  <br />
                  다만, 판매자의 제시사항이 관계법령보다 소비자에게 유리한
                  경우에는 판매자 제시사항이 적용됩니다.
                </li>
              </ul>
              <div className={styles["notice__grid"]}>
                <div className={styles["notice__item"]}>
                  <div className={styles["notice__title"]}>
                    교환/반품 비용
                    <br />
                    (왕복비용)
                  </div>
                  <div
                    className={`${styles["notice__content"]} ${styles["notice__width"]}`}
                  >
                    3,500원
                    <br />
                    - 단, 고객 변심의 경우에만 발생
                    <br />- 도서산간 및 일부 지역 추가비용 발생
                  </div>
                </div>
                <div className={styles["notice__item"]}>
                  <div className={styles["notice__title"]}>
                    교환/반품 신청 기준일
                  </div>
                  <div
                    className={`${styles["notice__content"]} ${styles["notice__width"]}`}
                  >
                    <p>
                      ㆍ단순변심에 의한 교환/반품은 제품 수령 후 7일 이내까지,
                      교환/반품 제한사항에 해당하지 않는 경우에만 가능
                      <p className={styles["indent"]}>
                        (배송비용과 교환/반품 비용 왕복배송비 고객부담)
                      </p>
                      <br />
                      ㆍ상품의 내용이 표시·광고의 내용과 다른 경우에는 상품을
                      수령한 날부터 3개월 이내, 그 사실을 안 날 또는 알 수
                      있었던 날부터
                    </p>
                    <p className={styles["indent"]}>
                      30일 이내에 청약철회 가능
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["notice__delivary__limit"]}>
              <h5>교환/반품 제한사항</h5>
              <ul>
                <li>ㆍ주문/제작 상품의 경우, 상품의 제작이 이미 진행된 경우</li>
                <li>
                  ㆍ상품 포장을 개봉하여 사용 또는 설치 완료되어 상품의 가치가
                  훼손된 경우 (단, 내용 확인을 위한 포장 개봉의 경우는 예외)
                </li>
                <li>
                  ㆍ고객의 사용, 시간경과, 일부 소비에 의하여 상품의 가치가
                  현저히 감소한 경우
                </li>
                <li>
                  ㆍ세트상품 일부 사용, 구성품을 분실하였거나 취급 부주의로 인한
                  파손/고장/오염으로 재판매 불가한 경우
                </li>
                <li>
                  ㆍ모니터 해상도의 차이로 인해 색상이나 이미지가 실제와 달라,
                  고객이 단순 변심으로 교환/반품을 무료로 요청하는 경우
                </li>
                <li>
                  ㆍ제조사의 사정 (신모델 출시 등) 및 부품 가격 변동 등에 의해
                  무료 교환/반품으로 요청하는 경우
                </li>
              </ul>
              <p className={styles["limit__text"]}>
                ※ 각 상품별로 아래와 같은 사유로 취소/반품이 제한될 수 있습니다.
              </p>
              <div className={styles["notice__grid"]}>
                <div className={styles["notice__item"]}>
                  <div className={styles["notice__title"]}>
                    의류/잡화/수입명품
                  </div>
                  <div
                    className={`${styles["notice__content"]} ${styles["notice__width"]}`}
                  >
                    ㆍ상품의 택(TAG) 제거, 라벨 및 상품 훼손, 구성품 누락으로
                    상품의 가치가 현저히 감소된 경우
                  </div>
                </div>
                <div className={styles["notice__item"]}>
                  <div className={styles["notice__title"]}>
                    계절상품/식품/화장품
                  </div>
                  <div
                    className={`${styles["notice__content"]} ${styles["notice__width"]}`}
                  >
                    <p>
                      ㆍ신선/냉장/냉동 식품의 단순변심의 경우
                      <br />
                      ㆍ뷰티 상품 이용 시 트러블(알러지, 붉은 반점, 가려움,
                      따가움)이 발생하는 경우,
                    </p>
                    <p className={styles["indent"]}>
                      진료 확인서 및 소견서 등을 증빙하면 환불이 가능 (제반비용
                      고객부담)
                    </p>
                  </div>
                </div>
                <div className={styles["notice__item"]}>
                  <div className={styles["notice__title"]}>
                    전자/가전/설치상품
                  </div>
                  <div
                    className={`${styles["notice__content"]} ${styles["notice__width"]}`}
                  >
                    <p>
                      ㆍ설치 또는 사용하여 재판매가 어려운 경우, 액정이 있는
                      상품의 전원을 켠 경우
                      <br />
                      ㆍ상품의 시리얼 넘버 유출로 내장된 소프트웨어의 가치가
                      감소한 경우 (내비게이션, OS시리얼이 적힌 PMP)
                      <br />
                      ㆍ홀로그램 등을 분리, 분실, 훼손하여 상품의 가치가 현저히
                      감소하여 재판매가 불가할 경우 (노트북, 데스크탑 PC 등)
                    </p>
                  </div>
                </div>
                <div className={styles["notice__item"]}>
                  <div className={styles["notice__title"]}>자동차용품</div>
                  <div
                    className={`${styles["notice__content"]} ${styles["notice__width"]}`}
                  >
                    <p>ㆍ상품을 개봉하여 장착한 이후 단순변심인 경우</p>
                  </div>
                </div>
                <div className={styles["notice__item"]}>
                  <div className={styles["notice__title"]}>
                    CD/DVD/GAME/ BOOK
                  </div>
                  <div
                    className={`${styles["notice__content"]} ${styles["notice__width"]}`}
                  >
                    <p>ㆍ복제가 가능한 상품의 포장 등을 훼손한 경우</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["notice__delivary__seller"]}>
              <h5>판매자 정보</h5>
              <div className={`${styles["notice__grid"]} ${styles["grid__2"]}`}>
                <div className={styles["notice__item"]}>
                  <div className={styles["notice__title"]}>상호/대표자</div>
                  <div className={styles["notice__content"]}>
                    주식회사 두손식품 / 윤진
                  </div>
                </div>
                <div className={`${styles["notice__item"]}`}>
                  <div className={styles["notice__title"]}>사업장 소재지</div>
                  <div className={styles["notice__content"]}>
                    인천광역시 남동구 운연로 135-1 (운연동) 1층
                  </div>
                </div>
                <div className={styles["notice__item"]}>
                  <div className={styles["notice__title"]}>e-mail</div>
                  <div className={styles["notice__content"]}>
                    dusonfood@naver.com
                  </div>
                </div>
                <div className={`${styles["notice__item"]}`}>
                  <div className={styles["notice__title"]}>연락처</div>
                  <div className={styles["notice__content"]}>02-1644-9914</div>
                </div>
                <div className={styles["notice__item"]}>
                  <div className={styles["notice__title"]}>
                    통신판매업
                    <br />
                    신고번호
                  </div>
                  <div className={styles["notice__content"]}>
                    2019-인천남동구-1394
                  </div>
                </div>
                <div className={`${styles["notice__item"]}`}>
                  <div className={styles["notice__title"]}>사업자번호</div>
                  <div className={styles["notice__content"]}>603-87-01605</div>
                </div>
                <div
                  className={`${styles["notice__item"]} ${styles["column__2"]}`}
                >
                  <div className={styles["notice__title"]}>구매안전 서비스</div>
                  <div
                    className={`${styles["notice__content"]} ${styles["notice__width"]}`}
                  >
                    <div className={styles["notice__service__join"]}>
                      02-123-4567
                      <p>{"서비스 가입사실 확인 >"}</p>
                    </div>
                    <p className={styles["escrow"]}>
                      본 판매자는 고객님의 안전거래를 위해 관련 법률에 의거하여
                      쿠팡페이의 구매안전서비스를 적용하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
              <p className={styles["minor__notice"]}>
                미성년자가 체결한 계약은 법정대리인이 동의하지 않는 경우 본인
                또는 법정대리인이 취소할 수 있습니다. 쿠팡은 통신판매중개자로서
                통신판매의 당사자가 아니며, 광고, 상품 주문, 배송 및 환불의
                의무와 책임은 각 판매자에 있습니다.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Product;

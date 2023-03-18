import styles from "./ProductInfo.module.css";
import { useEffect, useState } from "react";

/* Icon */
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillShareFill, BsCoin, BsChatLeftText } from "react-icons/bs";
import { FiHeart, FiThumbsUp } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";

/* redux */
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { Link } from "react-router-dom";

const ProductInfo = () => {
  const prodId = useSelector((state) => state.prod.id);
  const prodTitle = useSelector((state) => state.prod.title);
  const prodPrice = useSelector((state) => state.prod.price);
  const prodDiscount = useSelector((state) => state.prod.discount);
  const prodReview = useSelector((state) => state.prod.review);
  const prodMaxQuantity = useSelector((state) => state.prod.maxQuantity);

  // console.log(
  //   prodId,
  //   prodTitle,
  //   prodPrice,
  //   prodDiscount,
  //   prodReview,
  //   prodMaxQuantity
  // );

  /* 가격 */
  const [price, setPrice] = useState(prodPrice);
  /* 할인률 */
  // const [discount, setDiscount] = useState(prodDiscount);
  /* 개수 */
  const [quantity, setQuantity] = useState(1);

  /* 최대개수 넘지 못하게 */
  const quantityChangeHandler = (e) => {
    const value = Number(e.target.value);
    if (Number.isNaN(value) || value < 1) return;
    if (value > prodMaxQuantity) {
      setQuantity(prodMaxQuantity);
      return;
    }
    setQuantity(value);
  };

  /* 개수 관련 */
  const quantityBlurHandler = (e) => {
    if (e.target.value === "0") {
      setQuantity(1);
    }
    setPrice(prodPrice * quantity);
  };
  const quantityIncrease = () => {
    if (quantity === prodMaxQuantity) return;
    setQuantity((prev) => prev + 1);
    setPrice(prodPrice * quantity);
  };

  const quantityDecrease = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
    setPrice(prodPrice * quantity);
  };

  /* 개수 변경 시 가격,할인률 변경 */
  useEffect(() => {
    setPrice(prodPrice * quantity);
    // setDiscount(parseInt(prodDiscount / quantity));
  }, [prodPrice, prodDiscount, quantity]);

  // const isLogged = useSelector((state) => state.logged.isLogged);
  const [isShowing, setIsShowing] = useState(false);
  /* 장바구니 넣을 때 썸네일 이미지도 */
  const urlArray = useSelector((state) => state.prod.thumbnailUrl);
  /* 장바구니 넣기 */
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    setIsShowing(true);
    dispatch(
      cartActions.addItemToCart({
        id: prodId,
        thumbnail: urlArray[0].url,
        title: prodTitle,
        price,
        quantity,
      })
    );
  };

  useEffect(() => {
    if (isShowing) {
      const invisible = setTimeout(() => {
        setIsShowing(false);
      }, 3000);
      return () => clearTimeout(invisible);
    }
  });
  const goCartCancel = () => {
    setIsShowing(false);
  };
  return (
    <div className={styles["product__info"]}>
      <div className={styles["product__info--header"]}>
        <p className={styles["product__info--title"]}>{prodTitle}</p>
        {prodReview > 0 && (
          <div className={styles["review"]}>
            <span className={styles["empty-star"]}>
              <span
                className={styles["review-star"]}
                style={{ width: "80%" }}
              />
            </span>
            <span className={styles["review--count"]}>
              {prodReview}개 상품평
            </span>
          </div>
        )}
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
          <p className={styles["price__discount__rate"]}>{prodDiscount}%</p>
          <p className={styles["price__origin"]}>{price.toLocaleString()}원</p>
          <AiOutlineInfoCircle />
        </div>
        <div className={styles["price__sale"]}>
          <p className={styles["price__total"]}>{price.toLocaleString()}원</p>
          <p className={styles["price__info"]}>쿠팡판매가</p>
        </div>
        <div className={styles["price__coupon"]}>
          <p className={styles["price__total"]}>
            {(price - price * prodDiscount * 0.01).toLocaleString()}원
          </p>
          <p className={styles["price__info"]}>와우할인가</p>
        </div>
        <div>
          <div className={styles["price__badge"]}>
            <BsCoin />
            <p>
              최대{" "}
              {parseInt(
                (price - price * prodDiscount * 0.01) * 0.01
              ).toLocaleString()}
              원 적립
            </p>
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
          <p className={styles["seller--name"]}>(사)해남고구마생산자협회</p>
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
              최대{" "}
              <strong>
                {parseInt(
                  (price - price * prodDiscount * 0.01) * 0.01
                ).toLocaleString()}
                원
              </strong>{" "}
              적립
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
          <input
            type="text"
            value={quantity}
            onChange={quantityChangeHandler}
            onBlur={quantityBlurHandler}
          />
          <div className={styles["button--bag"]}>
            <button type="button" onClick={quantityIncrease}>
              <IoIosArrowUp />
            </button>
            <button type="button" onClick={quantityDecrease}>
              <IoIosArrowDown />
            </button>
          </div>
        </div>
        <div className={styles["buy--cart"]}>
          <button type="button" onClick={addToCartHandler}>
            장바구니 담기
          </button>
          <div></div>
          <button type="button">
            바로 구매 <IoIosArrowForward />
          </button>
        </div>
        {isShowing && (
          <div className={styles["goCart"]}>
            <RxCross2 onClick={goCartCancel} />
            상품이 장바구니에 담겼습니다.
            <Link to="/cart">
              <button type="button">{"장바구니 바로가기"}</button>
            </Link>
          </div>
        )}
      </div>
      <div className={styles["product__info--desc"]}>
        <ul>
          <li>쿠팡상품번호: {prodId}</li>
        </ul>
      </div>
      <div className={styles["product__info--inquiry"]}>
        <BsChatLeftText />
        <p>상품정보에 문제가 있나요?</p>
      </div>
    </div>
  );
};

export default ProductInfo;

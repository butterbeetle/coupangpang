import styles from "./ProductInfo.module.css";
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
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

const DUMMY_PRODUCT = {
  title: "진품인증 받은 해남고구마",
  price: 10500,
  discount: 47,
  maxQuantity: 999,
};

const ProductInfo = () => {
  const { productId } = useParams();
  // 가격
  const [originPrice] = useState(DUMMY_PRODUCT.price);
  const [price, setPrice] = useState(originPrice);
  // 할인률
  const [originDiscount] = useState(DUMMY_PRODUCT.discount);
  const [discount, setDiscount] = useState(originDiscount);
  // 개수
  const [quantity, setQuantity] = useState(1);

  const quantityChangeHandler = (e) => {
    const value = Number(e.target.value);
    if (Number.isNaN(value) || value < 1) return;
    if (value > 999) {
      setQuantity(999);
      return;
    }
    setQuantity(value);
  };
  const quantityBlurHandler = (e) => {
    if (e.target.value === "0") {
      setQuantity(1);
    }
    setPrice(originPrice * quantity);
  };
  const quantityIncrease = () => {
    if (quantity === 999) return;
    setQuantity((prev) => prev + 1);
    setPrice(originPrice * quantity);
  };

  const quantityDecrease = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
    setPrice(originPrice * quantity);
  };

  useEffect(() => {
    setPrice(originPrice * quantity);
    setDiscount(parseInt(originDiscount / quantity));
  }, [originPrice, originDiscount, quantity]);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: productId,
        title: DUMMY_PRODUCT.title,
        price: price,
        quantity: quantity,
      })
    );
  };
  return (
    <div className={styles["product__info"]}>
      <div className={styles["product__info--header"]}>
        <p className={styles["product__info--title"]}>{DUMMY_PRODUCT.title}</p>
        <div className={styles["review"]}>
          <span className={styles["empty-star"]}>
            <span className={styles["review-star"]} style={{ width: "80%" }} />
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
          <p className={styles["price__discount__rate"]}>{discount}%</p>
          <p className={styles["price__origin"]}>{price.toLocaleString()}원</p>
          <AiOutlineInfoCircle />
        </div>
        <div className={styles["price__sale"]}>
          <p className={styles["price__total"]}>{price.toLocaleString()}원</p>
          <p className={styles["price__info"]}>쿠팡판매가</p>
        </div>
        <div className={styles["price__coupon"]}>
          <p className={styles["price__total"]}>
            {(price - price * discount * 0.01).toLocaleString()}원
          </p>
          <p className={styles["price__info"]}>와우할인가</p>
        </div>
        <div>
          <div className={styles["price__badge"]}>
            <BsCoin />
            <p>
              최대{" "}
              {parseInt(
                (price - price * discount * 0.01) * 0.01
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
                  (price - price * discount * 0.01) * 0.01
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
  );
};

export default ProductInfo;

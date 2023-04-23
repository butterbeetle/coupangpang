import styles from "./ProductBuy.module.css";
import { Link } from "react-router-dom";
/* Icon */
import { MdCancel } from "@react-icons/all-files/md/MdCancel";
import { IoMdArrowUp } from "@react-icons/all-files/io/IoMdArrowUp";
import { IoMdArrowDown } from "@react-icons/all-files/io/IoMdArrowDown";
import { IoMdArrowForward } from "@react-icons/all-files/io/IoMdArrowForward";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { cartActions } from "../../../../store/cart-slice";
import { productActions } from "../../../../store/product-slice";

const ProductBuy = () => {
  const isLogged = useSelector((state) => state.logged.isLogged);
  const prodId = useSelector((state) => state.prod.id);
  const prodPrice = useSelector((state) => state.prod.price);
  const prodTitle = useSelector((state) => state.prod.title);
  const prodMaxQuantity = useSelector((state) => state.prod.maxQuantity);

  /* 가격 */
  const [price, setPrice] = useState(prodPrice);
  /* 개수 */
  const [quantity, setQuantity] = useState(1);

  /* 장바구니 넣기 */
  /* 장바구니 넣을 때 썸네일 이미지도 */
  const urlArray = useSelector((state) => state.prod.thumbnailUrl);
  const dispatch = useDispatch();
  /* 장바구니 클릭 시 바로가기 모달창 보이기/숨기기 */
  const [isShowing, setIsShowing] = useState(false);

  /* 개수 조절 관련 */
  /* 최대개수 넘지 못하게 확인*/
  const quantityChangeHandler = (e) => {
    const value = Number(e.target.value);
    if (Number.isNaN(value) || value < 1) return;
    if (value > prodMaxQuantity) {
      setQuantity(prodMaxQuantity);
      return;
    }
    setQuantity(value);
  };
  const quantityBlurHandler = (e) => {
    if (e.target.value === "0") {
      setQuantity(1);
    }
  };
  const quantityIncrease = () => {
    if (quantity === prodMaxQuantity) return;
    setQuantity((prev) => prev + 1);
  };

  const quantityDecrease = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };

  /* 장바구니 바로가기 모달창 3초 후 닫기 */
  useEffect(() => {
    if (isShowing) {
      const invisible = setTimeout(() => {
        setIsShowing(false);
      }, 3000);
      return () => clearTimeout(invisible);
    }
  });
  /* 장바구니 바로가기 모달창 바로 닫기 */
  const goCartCancel = () => {
    setIsShowing(false);
  };
  /* 개수 변경 시 가격,할인률 변경 */
  useEffect(() => {
    setPrice(prodPrice * quantity);
  }, [prodPrice, quantity]);

  /* 개수 변경 시 */
  useEffect(() => {
    dispatch(
      productActions.chagneCurrentProd({
        quantity,
        price,
      })
    );
  }, [dispatch, quantity, price]);

  /* 장바구니에 아이템 넣기 */
  const addToCartHandler = () => {
    setIsShowing(true);
    if (isLogged) {
      dispatch(
        cartActions.addItemToCart({
          id: prodId,
          thumbnail: urlArray[0].url,
          title: prodTitle,
          price,
          quantity,
        })
      );
    }
  };

  let cartModal = isLogged ? (
    <div className={styles["goCart"]}>
      <MdCancel onClick={goCartCancel} />
      상품이 장바구니에 담겼습니다.
      <Link to="/cart">
        <button type="button">{"장바구니 바로가기"}</button>
      </Link>
    </div>
  ) : (
    <div className={styles["goCart"]}>
      <MdCancel onClick={goCartCancel} />
      로그인이 필요합니다!
      <Link to="/login">
        <button type="button">{"로그인 바로가기"}</button>
      </Link>
    </div>
  );

  return (
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
            <IoMdArrowUp />
          </button>
          <button type="button" onClick={quantityDecrease}>
            <IoMdArrowDown />
          </button>
        </div>
      </div>
      <div className={styles["buy--cart"]}>
        <button type="button" onClick={addToCartHandler}>
          장바구니 담기
        </button>
        <div></div>
        <Link to="/payment">
          <button type="button">
            바로 구매 <IoMdArrowForward />
          </button>
        </Link>
      </div>
      {isShowing && cartModal}
    </div>
  );
};

export default ProductBuy;

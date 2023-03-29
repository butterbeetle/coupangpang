import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CartItem.module.css";
/* Icon */
import { BsXSquare } from "react-icons/bs";
import { FaCopyright } from "react-icons/fa";
/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../store/cart-slice";

let init = true;
const CartItem = ({ item }) => {
  /* select option */
  const selectOpt = [1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"];
  /* 10 미만 */
  const [itemQty, setItemQty] = useState(item.quantity);
  /* 10 이상 */
  const [itemQtyText, setItemQtyText] = useState("");
  /* 10 이상 입력 시 수량변경 버튼 보이기여부(변경했는지, 10+ 선택했는지)*/
  const [isChange, setIsChange] = useState(false);
  const [isLessTen, setIsLessTen] = useState(true);

  /* 10개 이상 선택 시 input focus용 */
  const inputRef = useRef(null);

  /* Redux Store & Firebase 업데이트용 */
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState(item);

  const checked = useSelector((state) => state.cart.checked);

  /* select 선택 */
  const selectHandler = (e) => {
    if (e.target.value !== "10+") {
      setIsLessTen(true);
      setItemQty(e.target.value);
      setNewItem((prev) => ({
        ...prev,
        quantity: +e.target.value,
        totalPrice: item.price * +e.target.value,
      }));
    } else {
      setItemQtyText(itemQty);
      setIsLessTen(false);
    }
  };

  /* 10개 이상일 때, 수량입력 시 */
  const onChangeHandler = (e) => {
    const value = Number(e.target.value);
    if (Number.isNaN(value) || value < 1) return;
    setIsChange(true);
    setItemQtyText(e.target.value);
  };

  const onBlurHandler = () => {
    if (isChange || +itemQty > 9) return;
    setIsLessTen(true);
  };
  /* 10개 이상일 때, 수량변경 버튼클릭 시 */
  const onClickHandler = () => {
    setIsChange(false);
    setItemQty(itemQtyText);
    if (+itemQtyText < 10) {
      setIsLessTen(true);
    }
    setNewItem((prev) => ({
      ...prev,
      quantity: +itemQtyText,
      totalPrice: item.price * +itemQtyText,
    }));
  };
  /* 수량 변경 시 마다 Redux Store & Firebase 업데이트 */
  useEffect(() => {
    if (init && itemQty > 10) {
      setItemQtyText(itemQty);
      setIsLessTen(false);
    }
    dispatch(cartActions.replaceCartItem({ item: newItem }));
  }, [dispatch, newItem, itemQty]);

  /* 10개 이상 선택 시 input에 focus */
  useLayoutEffect(() => {
    if (!isLessTen && inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, [isLessTen]);

  /* 단일 check 관리 */
  const singleCheckHandler = (checked) => {
    dispatch(cartActions.singleCheck({ id: item.id, checked }));
  };

  /* Item 삭제 */
  const itemDeleteHandler = () => {
    dispatch(cartActions.removeItemToCart(item.id));
  };
  return (
    <div key={item.id} className={styles["items__box"]}>
      <div className={styles["item__check"]}>
        <input
          type={"checkbox"}
          onChange={(e) => singleCheckHandler(e.target.checked)}
          checked={checked.includes(item.id) ? true : false}
        />
      </div>
      <div className={styles["item__img"]}>
        <Link to={"/"}>
          <img src={item.thumbnail} alt="" />
        </Link>
      </div>
      <div className={styles["item__info"]}>
        <div className={styles["item__title"]}>
          <Link to={`/products/${item.id}`}>{item.name}</Link>
        </div>
        <div className={styles["item__etc"]}>
          <div>목요일 3/9 도착 예정</div>
          <div className={styles["item__quantity"]}>
            <span className={styles["item__quantity__origin"]}>
              {item.price.toLocaleString()}원
            </span>
            <span
              className={`${
                isLessTen ? styles["select-select"] : styles["none"]
              }`}
            >
              <select
                onChange={selectHandler}
                value={itemQty !== "10+" && itemQty}
              >
                {selectOpt.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </span>
            <span
              className={`${
                isLessTen ? styles["none"] : styles["select-text"]
              }`}
            >
              <input
                ref={inputRef}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                value={itemQtyText}
                maxLength="4"
              />
              {isChange && (
                <button onClick={onClickHandler} type="button">
                  수량변경
                </button>
              )}
            </span>
            <span className={styles["item__quantity__total__price"]}>
              <p>{item.totalPrice.toLocaleString()}원</p>
            </span>
            <BsXSquare onClick={itemDeleteHandler} />
          </div>
        </div>
        <div className={styles["item__cash"]}>
          <span className={styles["item__cash__container"]}>
            <div className={styles["item__cash__circle"]}>
              <FaCopyright />
            </div>
            최대 {(item.totalPrice * 0.01).toLocaleString()}원 적립
          </span>
        </div>
      </div>
      <div className={styles["item__total__price"]}>
        {item.totalPrice.toLocaleString()}원
      </div>
      <div className={styles["item__delivery__price"]}>-</div>
    </div>
  );
};

export default CartItem;

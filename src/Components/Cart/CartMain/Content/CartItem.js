import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CartItem.module.css";
/* Icon */
import { BsXSquare } from "react-icons/bs";
import { FaCopyright } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cart-slice";

const CartItem = ({ item, index }) => {
  const selectOpt = [1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"];
  const [selected, setSelected] = useState(item.quantity);
  const [selectText, setSelectText] = useState("");

  const dispatch = useDispatch();
  const [test, setTest] = useState(item);

  /* select 선택 */
  const selectHandler = (e) => {
    setSelected(e.target.value);
    setSelectText(e.target.value);
    setTest((prev) => ({
      ...prev,
      quantity: +e.target.value,
      totalPrice: item.price * e.target.value,
    }));
  };
  /* 10개 이상일 때, 수량변경 버튼클릭 시 */
  const onClickHandler = () => {
    setSelected(selectText);
  };
  /* 10개 이상일 때, 수량입력 시 */
  const onChangeHandler = (e) => {
    setSelectText(e.target.value);
  };
  useEffect(() => {
    dispatch(cartActions.replaceCartItem({ item: test }));
  }, [dispatch, test]);
  // console.log(item);
  return (
    <div key={item.id} className={styles["items__box"]}>
      <div className={styles["item__check"]}>
        <input type={"checkbox"} />
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
            {selected < 10 ? (
              <span className={styles["select-select"]}>
                <select onChange={selectHandler} defaultValue={item.quantity}>
                  {selectOpt.map((opt, idx) => (
                    <option key={opt} value={idx + 1}>
                      {opt}
                    </option>
                  ))}
                </select>
              </span>
            ) : (
              <span className={styles["select-text"]}>
                <input
                  onChange={onChangeHandler}
                  value={selectText}
                  maxLength="4"
                />
                <button onClick={onClickHandler} type="button">
                  수량변경
                </button>
              </span>
            )}
            <span className={styles["item__quantity__total__price"]}>
              <p>{item.totalPrice.toLocaleString()}원</p>
            </span>
            <BsXSquare />
          </div>
        </div>
        <div className={styles["item__cash"]}>
          <span className={styles["item__cash__container"]}>
            <div className={styles["item__cash__circle"]}>
              <FaCopyright />
            </div>
            최대 10,000원 적립
          </span>
        </div>
      </div>
      <div className={styles["item__total__price"]}>
        {item.totalPrice.toLocaleString()}원
      </div>
      <div className={styles["item__delivary__price"]}>-</div>
    </div>
  );
};

export default CartItem;

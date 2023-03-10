import { Link } from "react-router-dom";
import styles from "./CartMain.module.css";

/* 아이콘 */
import { BsCart4, BsXSquare } from "react-icons/bs";
import { AiOutlineRight, AiOutlinePlusSquare } from "react-icons/ai";
import {
  MdAddCircle,
  MdPauseCircle,
  MdPausePresentation,
} from "react-icons/md";
import { FaCopyright } from "react-icons/fa";

/* 테스트이미지 */
import testImg from "../../../assets/img/test/test.jpg";

/* firebase */
import { firestore } from "../../../firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

/* redux */
import { useSelector } from "react-redux";

const CartMain = () => {
  /* 로그인 확인 */
  const logged = useSelector((state) => state.logged);
  const isLogged = useSelector((state) => state.logged.isLogged);

  const cart = useSelector((state) => state.cart);
  /* 장바구니 전체 가격 */
  const cartAmount = useSelector((state) => state.cart.totalAmount);
  /* 장바구니에 있는 Item 정보 */
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  // useEffect(() => {
  //   const sendCartData = async () => {
  //     await setDoc(doc(firestore, "cart", uid), cart);
  //   };
  //   if (isInitial || !isLogged) {
  //     isInitial = false;
  //     return;
  //   }
  //   sendCartData().catch((error) => {
  //     console.log(error);
  //   });
  // }, [cart, isLogged]);
  return (
    <main className={styles["main"]}>
      <div className={styles["contents"]}>
        <header className={styles["contents__header"]}>
          <BsCart4 className={styles["contents__header-icon"]} />
          <h1>장바구니</h1>
          <ul>
            <li className={styles["step"]}>
              <p className={styles["step__num"]}>01</p>
              <p className={styles["step__title"]}>옵션선택</p>
              <AiOutlineRight />
            </li>
            <li className={`${styles["step"]} ${styles["step__here"]}`}>
              <p className={styles["step__num"]}>02</p>
              <p className={styles["step__title"]}>장바구니</p>
              <AiOutlineRight />
            </li>
            <li className={styles["step"]}>
              <p className={styles["step__num"]}>03</p>
              <p className={styles["step__title"]}>주문/결제</p>
              <AiOutlineRight />
            </li>
            <li className={styles["step"]}>
              <p className={styles["step__num"]}>04</p>
              <p className={styles["step__title"]}>주문완료</p>
            </li>
          </ul>
        </header>
        <main className={styles["contents__main"]}>
          <ul className={styles["tab"]}>
            <li>일반구매 (1)</li>
            <li>정기배송 (0)</li>
          </ul>
          <div className={styles["items"]}>
            <ul className={styles["items__menu"]}>
              <li className={styles["menu__check"]}>
                <input type={"checkbox"} />
                전체선택
              </li>
              <li className={styles["menu__info"]}>상품정보</li>
              <li className={styles["menu__total__price"]}>상품금액</li>
              <li className={styles["menu__delivary__price"]}>배송비</li>
            </ul>
            <div className={styles["items__delivary_type"]}>
              판매자배송 상품
            </div>
            {cartItems.map((item) => (
              <div key={item.id} className={styles["items__box"]}>
                <div className={styles["item__check"]}>
                  <input type={"checkbox"} />
                </div>
                <div className={styles["item__img"]}>
                  <Link to={"/"}>
                    <img src={testImg} alt="" />
                  </Link>
                </div>
                <div className={styles["item__info"]}>
                  <div className={styles["item__title"]}>
                    <Link to={"/"}>{item.name}</Link>
                  </div>
                  <div className={styles["item__etc"]}>
                    <div>목요일 3/9 도착 예정</div>
                    <div className={styles["item__quantity"]}>
                      <span className={styles["item__quantity__origin"]}>
                        {item.price}원
                      </span>
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10+</option>
                      </select>
                      <span className={styles["item__quantity__total__price"]}>
                        3,300원
                      </span>
                      <BsXSquare />
                    </div>
                  </div>
                  {/* 수량변경 */}
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
                  {item.totalPrice}
                </div>
                <div className={styles["item__delivary__price"]}>-</div>
              </div>
            ))}
          </div>
          <div className={styles["calc"]}>
            <span>상품가격</span>
            <span className={styles["calc__price"]}>58,700</span>원
            <MdAddCircle className={styles["plus"]} />
            <span>배송비</span>
            <span className={styles["calc__delivary"]}>0</span>원
            <MdPauseCircle className={styles["equal"]} />
            <span>주문금액</span>
            <span className={styles["calc__total"]}>58,710</span>원
          </div>
          <div className={styles["select"]}>
            <div className={styles["select__check"]}>
              <input type="checkbox" />
              전체선택
              <span className={styles["cur__total"]}>( 0 / 1 )</span>
            </div>
            <div className={styles["select__all"]}>전체삭제</div>
            <div className={styles["select__soldOut"]}>
              품절/판매종료상품 전체삭제
            </div>
          </div>
          <div className={styles["cash"]}>
            <div className={styles["coin__circle"]}>
              <FaCopyright />
            </div>
            <h3>캐시적립 혜택</h3>
            <span>쿠페이 머니 결제 시 1% 적립</span>
          </div>
          <div className={styles["total"]}>
            <div className={styles["total__container"]}>
              총 상품가격
              <span className={styles["total__price"]}>0</span>원
              <AiOutlinePlusSquare className={styles["plus-square"]} />총 배송비
              <span className={styles["total__price"]}>0</span>원
              <MdPausePresentation className={styles["equal-square"]} />총
              주문금액
              <span
                className={`${styles["total__price"]} ${styles["total__price__final"]}`}
              >
                0원
              </span>
            </div>
          </div>
          <div className={styles["button"]}>
            <Link className={styles["button__shopping"]} to="/">
              계속 쇼핑하기
            </Link>
            <Link className={styles["button__buy"]} to="/">
              구매하기
            </Link>
          </div>
        </main>
      </div>
    </main>
  );
};

export default CartMain;

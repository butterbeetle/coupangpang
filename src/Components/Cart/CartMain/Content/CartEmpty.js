import { Link } from "react-router-dom";
import styles from "./CartEmpty.module.css";
/* Icon */
import { MdArrowForwardIos } from "react-icons/md";
const CartEmpty = () => {
  return (
    <div>
      <div className={styles["empty"]}>장바구니에 담은 상품이 없습니다.</div>
      <div className={styles["empty__button"]}>
        <div>
          각 상품에서 구매할 옵션을 선택하시고,<p>구매하기</p> 버튼을 눌러
          보세요!
          <br />
          선택한 옵션을 모두 장바구니에 담을 수 있습니다.
        </div>
        <Link className={styles["tody__prod"]} to="/">
          오늘의 추천 상품보기
          <MdArrowForwardIos />
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;

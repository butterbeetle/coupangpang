import CartTab from "./CartTab";
import CartItems from "./CartItems";
import CartButton from "./CartButton";
import CartCalc from "./CartCalc";
import CartTotal from "./CartTotal";
import CartCash from "./CartCash";
import CartSelect from "./CartSelect";
import { useDispatch, useSelector } from "react-redux";
import CartEmpty from "./CartEmpty";
import { useEffect } from "react";
import { getCartData } from "../../../../store/cart-action";

const CartMainContent = () => {
  const dispatch = useDispatch();
  /* 장바구니에 있는 Item 정보 */
  const cartItems = useSelector((state) => state.cart.items);
  /* firebase에서 장바구니, 최근 본 상품 얻어오기 */
  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);
  return (
    <main>
      <CartTab />
      <CartItems />
      {cartItems.length > 0 ? (
        <>
          <CartCalc />
          <CartSelect />
          <CartCash />
          <CartTotal />
          <CartButton />
        </>
      ) : (
        <CartEmpty />
      )}
    </main>
  );
};
export default CartMainContent;

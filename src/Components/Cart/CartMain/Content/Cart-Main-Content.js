import CartTab from "./CartTab";
import CartItems from "./CartItems";
import CartButton from "./CartButton";
import CartCalc from "./CartCalc";
import CartTotal from "./CartTotal";
import CartCash from "./CartCash";
import CartSelect from "./CartSelect";
import { useSelector } from "react-redux";
import CartEmpty from "./CartEmpty";

const CartMainContent = () => {
  /* 장바구니에 있는 Item 정보 */
  const cartItems = useSelector((state) => state.cart.items);
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

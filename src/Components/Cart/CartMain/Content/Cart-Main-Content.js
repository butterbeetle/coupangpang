import CartTab from "./CartTab";
import CartItems from "./CartItems";
import CartButton from "./CartButton";
import CartCalc from "./CartCalc";
import CartTotal from "./CartTotal";
import CartCash from "./CartCash";
import CartSelect from "./CartSelect";

const CartMainContent = () => {
  return (
    <main>
      <CartTab />
      <CartItems />
      <CartCalc />
      <CartSelect />
      <CartCash />
      <CartTotal />
      <CartButton />
    </main>
  );
};
export default CartMainContent;

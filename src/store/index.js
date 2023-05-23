import { configureStore } from "@reduxjs/toolkit";
import addrSlice from "./address-slice";
import cartSlice from "./cart-slice";
import loggedSlice from "./login-slice";
import productSlice from "./product-slice";
import recentViewSlice from "./recentView-slice";
import buySlice from "./buy-slice";

const store = configureStore({
  reducer: {
    logged: loggedSlice.reducer,
    cart: cartSlice.reducer,
    prod: productSlice.reducer,
    recentView: recentViewSlice.reducer,
    addr: addrSlice.reducer,
    buy: buySlice.reducer,
  },
});

export default store;

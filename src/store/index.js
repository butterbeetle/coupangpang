import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import loggedSlice from "./login-slice";
import productSlice from "./product-slice";

const store = configureStore({
  reducer: {
    logged: loggedSlice.reducer,
    cart: cartSlice.reducer,
    prod: productSlice.reducer,
  },
});

export default store;

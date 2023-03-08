import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import loggedSlice from "./login-slice";

const store = configureStore({
  reducer: {
    logged: loggedSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;

/* Redux-toolkit */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
/* Slice */
import addrSlice from "./address-slice";
import cartSlice from "./cart-slice";
import loggedSlice from "./login-slice";
import productSlice from "./product-slice";
import recentViewSlice from "./recentView-slice";
import orderSlice from "./order-slice";
/* Redux-persist */
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const reducers = combineReducers({
  logged: loggedSlice.reducer,
  cart: cartSlice.reducer,
  prod: productSlice.reducer,
  recentView: recentViewSlice.reducer,
  addr: addrSlice.reducer,
  order: orderSlice.reducer,
});

const persistConfig = {
  key: "root", //스토리지에 저장할 때의 키값을 지정한다.
  storage: storageSession,
  whitelist: ["order"], //스토리지에 저장할 리덕스 모듈을 나열한다.
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

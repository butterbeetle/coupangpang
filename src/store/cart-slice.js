import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    replaceCartItem(state, action) {
      console.log("redux", action.payload);
      state.items = action.payload;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          thumbnail: newItem.thumbnail,
          name: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: newItem.quantity,
        });
      } else {
        state.totalQuantity--;
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price;
      }
      // state.totalAmount = state.items.reduce((acc, cur) => {
      //   return (acc += cur.totalPrice);
      // }, 0);
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    resetItemToCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.changed = false;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // 장바구니 Item 정보
    totalQuantity: 0, // 장바구니 총 수량
    checked: [], // 장바구니 Item 체크
    changed: false, // 장바구니 변경 체크
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    replaceCartItem(state, action) {
      const newItemId = action.payload.item.id;
      const changeItemIndex = state.items.findIndex(
        (item) => item.id === newItemId
      );
      // console.log("redux item index", newItemId, changeItemIndex);
      if (changeItemIndex > -1) {
        state.changed = true;
        state.items[changeItemIndex] = action.payload.item;
      }
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
    singleCheck(state, action) {
      const id = action.payload.id;
      const array = [...state.checked];
      if (action.payload.checked) {
        state.checked.push(id);
      } else {
        state.checked = array.filter((itemId) => itemId !== id);
      }
    },
    allCheck(state, action) {
      const array = [];
      if (action.payload.checked) {
        state.items.forEach((item) => {
          array.push(item.id);
        });
        state.checked = array;
      } else {
        state.checked = [];
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

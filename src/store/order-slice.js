import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderedItems: [],
    currentItems: { addr: [], items: [], method: "card" },
  },
  reducers: {
    setOrderedItems(state, action) {
      const { order } = action.payload.data;
      // console.log("redux", order);
      state.orderedItems.push(order);
    },
    addToCurrentItems(state, action) {
      const { addr, items, method } = action.payload;

      if (addr) state.currentItems.addr = addr;
      if (items) state.currentItems.items = items;
      if (method) state.currentItems.method = method;
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice;

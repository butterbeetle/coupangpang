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
      state.orderedItems = [...order].sort((a, b) => b.date - a.date);
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

import { createSlice } from "@reduxjs/toolkit";

const buySlice = createSlice({
  name: "buy",
  initialState: {
    buyedItems: [],
    currentItems: { date: "", addr: [], items: [], method: "card" },
  },
  reducers: {
    addToCurrentItems(state, action) {
      const { addr, items, method } = action.payload;

      if (addr) state.currentItems.addr = addr;
      if (items) state.currentItems.items = items;
      if (method) state.currentItems.method = method;
    },
  },
});

export const buyAction = buySlice.actions;
export default buySlice;

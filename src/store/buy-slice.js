import { createSlice } from "@reduxjs/toolkit";

const buySlice = createSlice({
  name: "buy",
  initialState: {
    buyedItems: [],
    currentItems: { addr: [], items: [] },
  },
  reducers: {
    addToCurrentItems(state, action) {
      const { addr, items } = action.payload;

      if (addr) state.currentItems.addr = addr;
      if (items) state.currentItems.items = items;
    },
  },
});

export const buyAction = buySlice.actions;
export default buySlice;

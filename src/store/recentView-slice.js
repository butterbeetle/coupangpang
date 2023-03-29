import { createSlice } from "@reduxjs/toolkit";

const recentViewSlice = createSlice({
  name: "recentView",
  initialState: {
    items: [],
    changed: false,
  },
  reducers: {
    replaceRecentView(state, action) {
      // console.log("redux:", action.payload.items);
      state.items = action.payload.items;
    },
    addItemToRecentView(state, action) {
      const { id, title, price, url } = action.payload;
      if (!id || !title || !price || !url) return;
      state.changed = true;
      const realUrl = url.url;

      const existing = state.items.find((item) => item.id === id);

      if (!existing) {
        state.items.unshift({ id, title, price, realUrl });
      } else {
        if (state.items.length > 1) {
          state.items = state.items.filter((item) => item.id !== id);
          state.items.unshift({ id, title, price, realUrl });
        }
      }
    },
    removeItemToRecentView(state, action) {
      const id = action.payload;
      state.changed = true;
      state.items = state.items.filter((item) => item.id !== id);
      if (state.items.length === 0) {
        state.items = [];
      }
    },
    resetItemToRecentView(state) {
      state.items = [];
    },
  },
});

export const recentViewSliceActions = recentViewSlice.actions;
export default recentViewSlice;

import { createSlice, current } from "@reduxjs/toolkit";

const recentViewSlice = createSlice({
  name: "recentView",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToRecentView(state, action) {
      const { id, title, price, url } = action.payload;
      if (!id || !title || !price || !url) return;
      console.log("다 있으면", id, title, price, url);

      const existing = state.items.find((item) => item.id === id);

      if (!existing) {
        console.log("없음");
        state.items.unshift({ id, title, price, url });
      } else {
        console.log("있음");
        const arrFilter = state.items
          .filter((item) => item.id !== id)
          .unshift({ id, title, price, url });
        console.log(arrFilter);
        state.items = arrFilter;
      }
      console.log("작업 후", current(state.items));
    },
    removeItemToRecentView(state, action) {
      /* 사진,이름,가격 */
    },
  },
});

export const recentViewSliceActions = recentViewSlice.actions;
export default recentViewSlice;

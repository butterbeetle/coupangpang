import { createSlice } from "@reduxjs/toolkit";

const recentViewSlice = createSlice({
  name: "recentView",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToRecentView(state, action) {
      /* 사진,이름,가격 */
    },
    removeItemToRecentView(state, action) {
      /* 사진,이름,가격 */
    },
  },
});

export const recentViewSliceActions = recentViewSlice.actions;
export default recentViewSlice;

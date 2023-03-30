import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "add",
  title: "",
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    move(state, action) {
      state.location = action.payload;
      if (action.payload === "post") state.title = "배송주소 찾기";
      else if (action.payload === "add") state.title = "배송지 추가";
      else if (action.payload === "normal") state.title = "배송 요청사항";
      else if (action.payload === "dawn") state.title = "새벽배송 요청사항";
    },
  },
});

export const popupActions = popupSlice.actions;
export default popupSlice;

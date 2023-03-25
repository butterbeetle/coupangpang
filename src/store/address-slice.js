import { createSlice } from "@reduxjs/toolkit";

const addrSlice = createSlice({
  name: "addr",
  initialState: {
    data: [],
    roadAddress: "",
    zonecode: "",
    detailAddress: "",
  },
  reducers: {
    addAddr(state, action) {
      const { roadAddress, zonecode, detailAddress } = action.payload;

      if (roadAddress) state.roadAddress = roadAddress;
      if (zonecode) state.zonecode = zonecode;
      if (detailAddress) state.detailAddress = detailAddress;
    },
  },
});

export const addrActions = addrSlice.actions;
export default addrSlice;

import { createSlice } from "@reduxjs/toolkit";

const addrSlice = createSlice({
  name: "addr",
  initialState: {
    data: [],
    name: "",
    roadAddress: "",
    zonecode: "",
    detailAddress: "",
    phone: "",
    delivary_normal: "",
    delivary_dawn: "",
    default_setting: false,
  },
  reducers: {
    addAddr(state, action) {
      const {
        name,
        roadAddress,
        zonecode,
        detailAddress,
        phone,
        delivary_normal,
        delivary_dawn,
        default_setting,
      } = action.payload;

      if (name) state.name = name;
      if (roadAddress) state.roadAddress = roadAddress;
      if (zonecode) state.zonecode = zonecode;
      if (detailAddress) state.detailAddress = detailAddress;
      if (phone) state.phone = phone;
      if (delivary_normal) state.delivary_normal = delivary_normal;
      if (delivary_dawn) state.delivary_dawn = delivary_dawn;
      if (state.default_setting !== default_setting)
        state.default_setting = default_setting;
    },
  },
});

export const addrActions = addrSlice.actions;
export default addrSlice;

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
    delivaryNormal: "",
    delivaryNormalReq: "",
    delivaryDawn: "",
    delivaryDawnReq: "",
    default_setting: false,
    changed: false,
  },
  reducers: {
    replaceAddr(state, action) {
      state.data = action.payload.data;
    },
    setAddr(state, action) {
      const {
        name,
        roadAddress,
        zonecode,
        detailAddress,
        phone,
        delivaryNormal,
        delivaryNormalReq,
        delivaryDawn,
        delivaryDawnReq,
        default_setting,
      } = action.payload;

      if (name) state.name = name;
      if (roadAddress) state.roadAddress = roadAddress;
      if (zonecode) state.zonecode = zonecode;
      if (detailAddress) state.detailAddress = detailAddress;
      if (phone) state.phone = phone;
      if (delivaryNormal) state.delivaryNormal = delivaryNormal;
      if (delivaryNormalReq || delivaryNormalReq === "")
        state.delivaryNormalReq = delivaryNormalReq;
      if (delivaryDawn) state.delivaryDawn = delivaryDawn;
      if (delivaryDawnReq || delivaryDawnReq === "")
        state.delivaryDawnReq = delivaryDawnReq;
      if (state.default_setting !== default_setting)
        state.default_setting = default_setting;
    },
    addAddr(state, action) {
      const newData = action.payload;
      state.changed = true;
      state.data.push({
        id: newData.id,
        name: newData.name,
        detailAddress: newData.detailAddress,
        phone: newData.phone,
        roadAddress: newData.roadAddress,
        zonecode: newData.zonecode,
        default_setting: state.default_setting ? true : false,
      });
    },
  },
});

export const addrActions = addrSlice.actions;
export default addrSlice;
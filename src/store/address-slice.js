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
    reset(state) {
      state.name = "";
      state.roadAddress = "";
      state.zonecode = "";
      state.detailAddress = "";
      state.phone = "";
      state.delivaryNormal = "";
      state.delivaryNormalReq = "";
      state.delivaryDawn = "";
      state.delivaryDawnReq = "";
      state.default_setting = false;
      // state.changed = false;
    },
    replaceAddr(state, action) {
      state.changed = false;
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
        changed,
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
      if (!state.default_setting === default_setting) {
        state.default_setting = default_setting;
      }
      if (!state.changed === changed) state.changed = changed;
    },

    addAddr(state, action) {
      const newData = action.payload;
      const existingData = state.data.find((data) => data.id === newData.id);
      state.changed = true;

      if (state.default_setting) {
        state.data.forEach((item) => {
          if (item.default_setting) item.default_setting = false;
        });
      }

      if (!existingData) {
        state.data.push({
          id: newData.id,
          name: newData.name,
          detailAddress: newData.detailAddress,
          phone: newData.phone,
          roadAddress: newData.roadAddress,
          zonecode: newData.zonecode,
          default_setting: state.default_setting ? true : false,
          delivaryDawn: newData.delivaryDawn ? newData.delivaryDawn : "",
          delivaryDawnReq: newData.delivaryDawnReq
            ? newData.delivaryDawnReq
            : "",
          delivaryNormal: newData.delivaryNormal ? newData.delivaryNormal : "",
          delivaryNormalReq: newData.delivaryNormalReq
            ? newData.delivaryNormalReq
            : "",
        });
      } else {
        existingData.name = newData.name;
        existingData.detailAddress = newData.detailAddress;
        existingData.phone = newData.phone;
        existingData.roadAddress = newData.roadAddress;
        existingData.zonecode = newData.zonecode;
        existingData.default_setting = state.default_setting ? true : false;
        existingData.delivaryDawn = newData.delivaryDawn
          ? newData.delivaryDawn
          : "";
        existingData.delivaryDawnReq = newData.delivaryDawnReq
          ? newData.delivaryDawnReq
          : "";
        existingData.delivaryNormal = newData.delivaryNormal
          ? newData.delivaryNormal
          : "";
        existingData.delivaryNormalReq = newData.delivaryNormalReq
          ? newData.delivaryNormalReq
          : "";
      }
    },
    removeAddr(state, action) {
      const id = action.payload;
      state.changed = true;

      state.data = state.data.filter((data) => data.id !== id);

      if (state.data.length === 0) {
        state.data = [];
      }
    },
  },
});

export const addrActions = addrSlice.actions;
export default addrSlice;

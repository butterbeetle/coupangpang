import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  id: "",
  title: "",
  price: "",
  discount: "",
  review: "",
  maxQuantity: "",
  detailUrl: [],
  thumbnailUrl: [],
  current: {
    quantity: 1,
    price: 0,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    chagneCurrentProd(state, action) {
      state.current = action.payload;
    },
    addProduct(state, action) {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.price = action.payload.price;
      state.discount = action.payload.discount;
      state.review = action.payload.review;
      state.maxQuantity = action.payload.maxQuantity;
    },
    addDetailUrl(state, action) {
      const url = action.payload;
      const existingUrl = state.detailUrl.find((item) => item.url === url);
      if (!existingUrl) state.detailUrl.push(url);
    },
    addThumbnailUrl(state, action) {
      const url = action.payload;
      const existingUrl = state.thumbnailUrl.find((item) => item.url === url);
      if (!existingUrl) state.thumbnailUrl.push(url);
    },
    resetUrl(state) {
      state.detailUrl = [];
      state.thumbnailUrl = [];
    },
    nowLoading(state) {
      state.isLoading = true;
    },
    endLoading(state) {
      state.isLoading = false;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
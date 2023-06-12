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

      state.detailUrl.sort((a, b) => {
        const aIdx = a.url.indexOf(".webp");
        const bIdx = b.url.indexOf(".webp");
        return (
          a.url.substring(aIdx - 2, aIdx).replace(/[^0-9]/g, "") -
          b.url.substring(bIdx - 2, bIdx).replace(/[^0-9]/g, "")
        );
      });
    },
    addThumbnailUrl(state, action) {
      const url = action.payload;
      const existingUrl = state.thumbnailUrl.find((item) => item.url === url);
      if (!existingUrl) state.thumbnailUrl.push(url);

      state.thumbnailUrl.sort((a, b) => {
        const aIdx = a.url.indexOf(".webp");
        const bIdx = b.url.indexOf(".webp");
        return (
          a.url.substring(aIdx - 2, aIdx).replace(/[^0-9]/g, "") -
          b.url.substring(bIdx - 2, bIdx).replace(/[^0-9]/g, "")
        );
      });
    },
    resetUrl(state) {
      state.detailUrl = [];
      state.thumbnailUrl = [];
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;

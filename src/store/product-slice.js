import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  allProdData: [],
  id: "",
  title: "",
  price: "",
  discount: "",
  review: "",
  maxQuantity: "",
  seller: "",
  delivery_service: "",
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
    setAllProdData(state, action) {
      const { id, data, url } = action.payload;
      const idx = state.allProdData.findIndex((prodData) => prodData.id === id);
      if (data && idx < 0) state.allProdData.push({ id, data });
      if (url && idx > -1) {
        state.allProdData[idx] = {
          ...state.allProdData[idx],
          thumbnail: url,
        };
      }
    },
    chagneCurrentProd(state, action) {
      state.current = action.payload;
    },
    addProduct(state, action) {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.price = action.payload.price;
      state.discount = action.payload.discount;
      state.seller = action.payload.seller;
      state.delivery_service = action.payload.delivery_service;
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

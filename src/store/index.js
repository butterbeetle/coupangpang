import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  user_name: null,
};

const loggedSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.isLogged = true;
      state.user_name = action.payload.user_name;
    },
    logout(state) {
      state.isLogged = false;
      state.user_name = null;
    },
  },
});

const store = configureStore({
  reducer: {
    logged: loggedSlice.reducer,
  },
});

export const loggedActions = loggedSlice.actions;

export default store;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  email: "",
  name: "",
  phone: "",
};

const loggedSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
    login(state) {
      state.isLogged = true;
    },
    logout(state) {
      state.isLogged = false;
      state.email = "";
      state.name = "";
      state.phone = "";
    },
  },
});

export const loggedActions = loggedSlice.actions;
export default loggedSlice;

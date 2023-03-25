import { createSlice } from "@reduxjs/toolkit";
import { getAuth, signOut } from "firebase/auth";
import { deleteIndexedDbData } from "../Util/IndexedDB";

const initialState = {
  isLogged: false,
  user: {
    name: "",
    email: "",
    phone: "",
    address: [],
  },
};

const loggedSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    replaceUserData(state, action) {
      state.user.name = action.payload.data.name;
      state.user.email = action.payload.data.email;
      state.user.phone = action.payload.data.phone;
    },
    login(state) {
      state.isLogged = true;
    },
    logout(state) {
      state.isLogged = false;
      deleteIndexedDbData();
      const auth = getAuth();
      signOut(auth);
    },
  },
});

export const loggedActions = loggedSlice.actions;
export default loggedSlice;

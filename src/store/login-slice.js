import { createSlice } from "@reduxjs/toolkit";
import { getAuth, signOut } from "firebase/auth";

const initialState = {
  isLogged: false,
  user: {
    uid: "",
    name: "",
    email: "",
    phone: "",
  },
  // uid: "",
  // name: "",
  // email: "",
  // phone: "",
};

const loggedSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // register(state, action) {
    //   state.uid = action.payload.uid;
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    //   state.phone = action.payload.phone;
    // },
    login(state) {
      state.isLogged = true;
    },
    logout(state) {
      const auth = getAuth();
      state.isLogged = false;
      signOut(auth);
      // state.uid = "";
      // state.name = "";
      // state.email = "";
      // state.phone = "";
    },
  },
});

export const loggedActions = loggedSlice.actions;
export default loggedSlice;

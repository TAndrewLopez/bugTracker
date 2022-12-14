import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    admin: false,
    loggedIn: false,
  },

  reducers: {
    signIn(state, action) {
      const { name, password } = action.payload;
      state.loggedIn = true;
      state.admin = true;
    },
    signOut(state) {
      state.loggedIn = false;
      state.admin = false;
    },
    createUser(state, action) {},
  },
});

export const test = () => {};
export const { signIn, signOut, createUser } = slice.actions;
export default slice.reducer;

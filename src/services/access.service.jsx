import { createSlice } from "@reduxjs/toolkit";

export const AccessServices = createSlice({
  name: "access",
  initialState: {
    ageLegal: "",
    cookies: "",
  },

  reducers: {
    set_age: (state, data) => {
      state.ageLegal = data.payload;
      localStorage.setItem("ageLegal", JSON.stringify(state.ageLegal));
    },
    set_cookies: (state, data) => {
      state.cookies = data.payload;
      localStorage.setItem("cookies", JSON.stringify(state.cookies));
    },
  },
});

export const { ageLegal, cookies, set_age, set_cookies } = AccessServices.actions;

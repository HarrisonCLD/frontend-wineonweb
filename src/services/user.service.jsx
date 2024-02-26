import { createSlice } from "@reduxjs/toolkit";

export const userServices = createSlice({
  name: "user",
  initialState: {
    status: { status: "", message: "" },
    user: {},
    token: "",
  },

  reducers: {
    set_status: (state, data) => {
      state.status = data.payload;
    },
    set_user: (state, data) => {
      console.log(data.payload);
      state.user = data.payload;
    },

    set_token: (state, data) => {
      state.token = data.payload;
    },

    get_token: (state) => {
      return state.token;
    },
  },
});

export const { status, user, token, set_status, set_user, set_token, get_token } = userServices.actions;

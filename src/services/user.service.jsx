import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

import { set_data } from "@helpers/api.helper";

export const userServices = createSlice({
  name: "user",
  initialState: {
    user: {},
  },

  reducers: {
    set_user: (state) => {},

    signup: async (state, data) => {
      try {
        const user = data.payload;
        state.user = await set_data("/authentification/signup", user);
      } catch (error) {
        console.error("Erreur lors de la connexion :", error);
      }
    },

    signin: async (state, data) => {
      try {
        const credentials = data.payload;
        state.user = await set_data("/authentification/signin", credentials);
      } catch (error) {
        console.error("Erreur lors de la connexion :", error);
      }
    },
  },
});

export const { user, set_user, signup, signin } = userServices.actions;

import { createSlice } from "@reduxjs/toolkit";

export const itemServices = createSlice({
  name: "item",
  initialState: {
    view: null,
    item: {},
  },

  reducers: {
    set_view: (state, data) => {
      state.view = data.payload;
    },
    set_item: (state, data) => {
      console.log(data.payload);
    },
  },
});

export const { view, item, set_view, set_items } = itemServices.actions;

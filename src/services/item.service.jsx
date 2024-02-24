import { createSlice } from "@reduxjs/toolkit";

export const itemServices = createSlice({
  name: "item",
  initialState: {
    status: "pending",
    view: false,
    item: {},
  },

  reducers: {
    set_view: (state) => {
      state.view = !state.view;
    },
    set_item: (state, data) => {
      console.log(data.payload);
    },
    set_status: (state, data) => {
      state.status = data.payload;
    },
  },
});

export const { view, item, set_view, set_items, set_status } = itemServices.actions;

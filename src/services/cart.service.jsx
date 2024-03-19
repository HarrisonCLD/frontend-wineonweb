import { configureStore as reduxConfigureStore, createSlice } from "@reduxjs/toolkit";

export const cartServices = createSlice({
  name: "cart",
  initialState: {
    show: false,
    items: [],
  },

  reducers: {
    showCart: (state) => {
      state.show = !state.show;
    },

    addtoCart: (state, data) => {
      const existingItem = state.items.find(
        (item) =>
          item.id === data.payload.id && item.option_attribut === data.payload.option_attribut
      );
      if (existingItem) {
        existingItem.quantite++;
      } else {
        data.payload.quantite = 1;
        state.items.push(data.payload);
      }
    },

    increaseItem: (state, action) => {
      const itemId = action.payload;
      const itemToIncrease = state.items.find((item) => item.id === itemId);
      if (itemToIncrease) {
        itemToIncrease.quantite++;
      }
    },

    decreaseItem: (state, action) => {
      const itemId = action.payload;
      const itemToDecreaseIndex = state.items.findIndex((item) => item.id === itemId);
      if (itemToDecreaseIndex !== -1) {
        const itemToDecrease = state.items[itemToDecreaseIndex];
        itemToDecrease.quantite--;

        if (itemToDecrease.quantite <= 0) {
          state.items.splice(itemToDecreaseIndex, 1);
        }
      }
    },

    modifyQte: (state, action) => {
      const itemId = action.payload.id;
      const qte = action.payload.qte;
      const itemToIncrease = state.items.find((item) => item.id === itemId);
      if (itemToIncrease) {
        itemToIncrease.quantite = qte;
        console.log(qte);
      }
    },
  },
});

export const { show, items, showCart, addtoCart, increaseItem, decreaseItem, modifyQte } =
  cartServices.actions;

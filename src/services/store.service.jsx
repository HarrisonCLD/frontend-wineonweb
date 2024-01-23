import { configureStore as reduxConfigureStore } from "@reduxjs/toolkit";

import { userServices } from "./user.service";
import { itemServices } from "./item.service";
import { cartServices } from "./cart.service";

const rootReducer = {
  User: userServices.reducer,
  Item: itemServices.reducer,
  Cart: cartServices.reducer,
};

const store = reduxConfigureStore({ reducer: rootReducer });

export default store;

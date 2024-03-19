import { configureStore as reduxConfigureStore } from "@reduxjs/toolkit";

import { userServices } from "./user.service";
import { itemServices } from "./item.service";
import { cartServices } from "./cart.service";
import { AccessServices } from "./access.service";

const rootReducer = {
  User: userServices.reducer,
  Item: itemServices.reducer,
  Cart: cartServices.reducer,
  Access: AccessServices.reducer,
};

const store = reduxConfigureStore({ reducer: rootReducer });

export default store;

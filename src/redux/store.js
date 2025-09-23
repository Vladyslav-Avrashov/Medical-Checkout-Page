import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/slice";
import { ordersReducer } from "./order/slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: ordersReducer,
  },
});

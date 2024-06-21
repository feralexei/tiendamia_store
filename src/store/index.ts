import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./reducers/products";

const store = configureStore({
  reducer: {
    products: productsReducer
  },
});
export type stateType = ReturnType<typeof store.getState>;
export default store;

import { createAction } from "@reduxjs/toolkit";

const captureText = createAction("captureText", (obj) => {
  return {
    payload: { text: obj.text },
  };
});

const calculateTotal = createAction("calculateTotal", (obj) => {
  return {
    payload: { products: obj.products },
  };
});

const updateItemCount = createAction("updateItemCount", (count) => {
  return {
    payload: { count },
  };
});

export { captureText, calculateTotal, updateItemCount };

import { createAction } from "@reduxjs/toolkit";

const captureText = createAction("captureText", (obj) => {
  return {
    payload: { text: obj.text },
  };
});

const calculateTotal = createAction("calculeTotal", (obj) => {
  return {
    payload: { products: obj.products },
  };
});

export { captureText, calculateTotal };

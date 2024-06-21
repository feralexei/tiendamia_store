import { createReducer } from "@reduxjs/toolkit";
import { calculateTotal, captureText } from "../actions/products";

const initialState = { text: "", total: 0 };

const productsReducer = createReducer(initialState, (build) => build
    .addCase(captureText, (state, action) => {
        const newState = {
            ...state,
            text: action.payload.text,
        };
        return newState;
    })
    .addCase(calculateTotal, (state, action) => {
        const products = action.payload.products
        const subtotals = products.map((each) => each.price * each.units);
        const total = subtotals.reduce((acc: number, val: number) => acc + val)
        const newState = {
            ...state,
            total,
        };
        return newState;
    })
);
export { productsReducer };

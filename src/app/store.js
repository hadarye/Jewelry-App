import { configureStore } from "@reduxjs/toolkit";
import storeSliceReducer from './storeSlice';

export const store = configureStore({
    reducer: {
        store: storeSliceReducer
    }
});
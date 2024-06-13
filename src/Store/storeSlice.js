import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    createYourOwn : {
        type: "necklace"
    }
};

export const storeSlice = createSlice({
    name: "store",
    initialState,
    reducers: {
        resetStoreSlice: (state, action) => {
            state.createYourOwn = initialState.createYourOwn;
        }
    }
})
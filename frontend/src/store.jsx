import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/api-slice.component";
import cartSliceReducer from './slices/cart-slice.component';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;
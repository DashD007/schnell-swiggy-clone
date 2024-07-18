import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
// this is our redux store
const appStore = configureStore({
    reducer:{
        cart: cartReducer,
    }
});

export default appStore;
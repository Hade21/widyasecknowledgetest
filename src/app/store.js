import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./features/register/register";

export default configureStore({
    reducer: {
        register: registerReducer,
    },
});
import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./features/register/register";
import activeReducer from "./features/pages/active";

export default configureStore({
    reducer: {
        register: registerReducer,
        active: activeReducer,
    },
});
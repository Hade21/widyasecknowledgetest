import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    validUser: false,
    userFocus: false,
    email: "",
    validEmail: false,
    emailFocus: false,
    pwd: "",
    validPwd: false,
    pwdFocus: false,
    matchPwd: "",
    validMatch: false,
    matchFocus: false,
    errMsg: "",
    success: "",
};

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setUser: (state, action) => {
            return {
                ...state,
                username: action.payload,
            };
        },
        setEmail: (state, action) => {
            return {
                ...state,
                email: action.payload,
            };
        },
        setPwd: (state, action) => {
            return {
                ...state,
                pwd: action.payload,
            };
        },
        setMatch: (state, action) => {
            return {
                ...state,
                matchPwd: action.payload,
            };
        },
    },
});

export const { setEmail, setUser, setMatch, setPwd } = registerSlice.actions;

export default registerSlice.reducer;
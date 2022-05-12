import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: false,
    updateProfile: false,
    articles: false,
    addArticle: false,
    username: "",
    bio: "",
    image: "",
    password: "",
    title: "",
    description: "",
    body: "",
    tagList: [],
};

export const activeSlices = createSlice({
    name: "active",
    initialState,
    reducers: {
        setTagList: (state, action) => {
            return {
                ...state,
                tagList: [...state.tagList, action.payload],
            };
        },
        setBody: (state, action) => {
            return {
                ...state,
                body: action.payload,
            };
        },
        setDes: (state, action) => {
            return {
                ...state,
                description: action.payload,
            };
        },
        setTitle: (state, action) => {
            return {
                ...state,
                title: action.payload,
            };
        },
        setProfileActive: (state) => {
            return {
                ...state,
                profile: !state.profile,
            };
        },
        setArticlesActive: (state) => {
            return {
                ...state,
                articles: !state.articles,
            };
        },
        setAddArticle: (state) => {
            return {
                ...state,
                addArticle: !state.addArticle,
            };
        },
        setUpdateProfile: (state) => {
            return {
                ...state,
                updateProfile: !state.updateProfile,
            };
        },
        setUser: (state, action) => {
            return {
                ...state,
                username: action.payload,
            };
        },
        setBio: (state, action) => {
            return {
                ...state,
                bio: action.payload,
            };
        },
        setImage: (state, action) => {
            return {
                ...state,
                image: action.payload,
            };
        },
        setPass: (state, action) => {
            return {
                ...state,
                password: action.payload,
            };
        },
    },
});

export const {
    setArticlesActive,
    setAddArticle,
    setProfileActive,
    setUpdateProfile,
    setUser,
    setBio,
    setImage,
    setPass,
    setTitle,
    setDes,
    setBody,
    setTagList,
} = activeSlices.actions;

export default activeSlices.reducer;
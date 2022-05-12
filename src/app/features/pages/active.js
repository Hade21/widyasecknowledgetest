import { createSlice } from "@reduxjs/toolkit";
import validator from "validator";

const initialState = {
    profile: false,
    profileDetail: null,
    updateProfile: false,
    articles: false,
    addArticle: false,
    username: "",
    bio: "",
    email: "",
    image: "",
    validImage: false,
    password: "",
    title: "",
    description: "",
    body: "",
    tagList: [],
    profileUpdated: false,
};

export const activeSlices = createSlice({
    name: "active",
    initialState,
    reducers: {
        setProfilDetail: (state, action) => {
            return {
                ...state,
                profileDetail: action.payload,
            };
        },
        setTagList: (state, action) => {
            return {
                ...state,
                tagList: [action.payload],
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
        setEmail: (state, action) => {
            return {
                ...state,
                email: action.payload,
            };
        },
        setBio: (state, action) => {
            return {
                ...state,
                bio: action.payload,
            };
        },
        setImage: (state, action) => {
            if (validator.isURL(action.payload)) {
                return {
                    ...state,
                    image: action.payload,
                };
            } else {
                return {
                    ...state,
                    image: null,
                };
            }
        },
        setvalidImage: (state, action) => {},
        setPass: (state, action) => {
            return {
                ...state,
                password: action.payload,
            };
        },
        setArticle: (state, action) => {
            return {
                ...state,
                article: action.payload,
            };
        },
        resetProfile: (state) => {
            return {
                ...state,
                username: "",
                bio: "",
                email: "",
                image: "",
                password: "",
            };
        },
        resetArticle: (state) => {
            return {
                ...state,
                title: "",
                description: "",
                body: "",
                tagList: [],
            };
        },
        setProfileUpdated: (state) => {
            return {
                ...state,
                profileUpdated: !state.profileUpdated,
            };
        },
    },
});

export const {
    setArticlesActive,
    setProfilDetail,
    setAddArticle,
    setProfileActive,
    setUpdateProfile,
    setUser,
    setEmail,
    setBio,
    setImage,
    setPass,
    setTitle,
    setDes,
    setBody,
    setTagList,
    setArticle,
    setProfileUpdated,
    resetProfile,
    resetArticle,
} = activeSlices.actions;

export default activeSlices.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getArticle = createAsyncThunk(
    "article/getArticle",
    async (fetchParams) => {
        const response = await fetch(`https://www.reddit.com/r/${fetchParams.subreddit}/comments/${fetchParams.id}.json?raw_json=1`)
        const jsonResponse = await response.json();
        return jsonResponse
    }
)

const articleSlice = createSlice({
    name: 'article',
    initialState: {
        article: [],
        isLoading: true,
        hasError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getArticle.pending, (state) => {
            state.isLoading = true;
            state.hasError = false;
        })
        .addCase(getArticle.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.article = action.payload;
        })
        .addCase(getArticle.rejected, (state) => {
            state.isLoading = false;
            state.hasError = true;
        })
    }
});

export const selectArticle = (state) => state.article.article;

export const isLoading = (state) => state.article.isLoading;

export default articleSlice.reducer;
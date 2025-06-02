import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const handleComments = (json) => {

}

export const getComments = createAsyncThunk(
    "comments/getComments",
    async (post) => {
        const response = await fetch(`https://www.reddit.com/r/${post.subreddit}/comments/${post.id}.json?raw_json=1`)
        const jsonResponse = await response.json();
        console.log(jsonResponse)
        return jsonResponse
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        isLoading: true,
        hasError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getComments.pending, (state) => {
            state.isLoading = true;
            state.hasError = false;
        })
        .addCase(getComments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.comments = action.payload;
        })
        .addCase(getComments.rejected, (state) => {
            state.isLoading = false;
            state.hasError = true;
        })
    }
});

export const selectComments = (state) => state.comments.comments;

export const isLoading = (state) => state.comments.isLoading;

export default commentsSlice.reducer;
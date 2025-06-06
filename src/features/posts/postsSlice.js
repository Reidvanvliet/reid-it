import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "../../api/Api";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: true,
    hasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const selectPosts = (state) => state.posts.posts;

export const isLoading = (state) => state.posts.isLoading;

export default postsSlice.reducer;

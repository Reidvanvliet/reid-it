import { createSlice } from '@reduxjs/toolkit';
import { getCommunityPosts } from '../../api/Api';

const communityPostsSlice = createSlice({
    name:'communityPosts',
    initialState: {
        communityPosts: [],
        isLoading: true,
        hasError: false
    },
    reducer: {},
    extraReducers: (builder) => {
            builder
            .addCase(getCommunityPosts.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(getCommunityPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.communityPosts = action.payload;
            })
            .addCase(getCommunityPosts.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            })
        }
});

export const selectCommunityPosts = (state) => state.communityPosts.communityPosts;

export const isLoading = (state) => state.communityPosts.isLoading;

export default communityPostsSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCommunities } from "../../api/Api";

const communitiesSlice = createSlice({
    name: 'communities',
    initialState: {
        communities: {},
        isLoading: true,
        hasError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCommunities.pending, (state) => {
            state.isLoading = true;
            state.hasError = false;
        })
        .addCase(getCommunities.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.communities = action.payload;
        })
        .addCase(getCommunities.rejected, (state) => {
            state.isLoading = false;
            state.hasError = true;
        })
    }
});

export const selectCommunities = (state) => state.communities.communities;

export const isLoading = (state) => state.communities.isLoading;

export default communitiesSlice.reducer;
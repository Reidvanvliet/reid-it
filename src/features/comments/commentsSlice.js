import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const handleComments = (json) => {

}

export const getComments = createAsyncThunk(
    "comments/getComments",
    async (post) => {
        const response = await fetch(`https://www.reddit.com/r/${post.subreddit}/comments/${post.id}.json?raw_json=1`)
    }
)

const commentsSlice = createSlice({

})
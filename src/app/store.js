import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice"
import articleReducer from '../features/article/articleSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    article: articleReducer
  },
});

/* the store initial state will look like this:
{
    article: [{
        id:
        img:
        title:
        body:
        numUpvotes:
        dateCreated:
        upTime:
        subreddit:
        subredditId:
        author:
        comments: [{
            id:
            author:
            authorAvatar:
            date:
            body:
            replies:[{},{}]
        },{}]
    },{}]
    search: {
        param:
        input:
    }
    postComment: {
        body:
    }
    user: {
        accessToken:
        username:
        posts: [{}]
    }
}*/
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    
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
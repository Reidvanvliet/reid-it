import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/*export const getPosts = async () => {
  try {
    const response = await fetch("https://www.reddit.com/best.json?raw_json=1");
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};*/

const handlePostsData = async (json) => {
  const postData = [];
  json.data.children.map((postJson) => {
    //convert date from epoch to string
    const dateCreated = new Date(postJson.data.created * 1000);
    const dateCreatedString = dateCreated.toString();
    //get current time and subtract date created in ms, convert to hrs
    const currentTime = Date.now();
    const timeDiff = currentTime - postJson.data.created * 1000;
    const timeDiffHrs = Math.round(timeDiff / 1000 / 60 / 60);
    const post = {
      id: postJson.data.id,
      title: postJson.data.title,
      body: postJson.data.selftext,
      numUpvotes: postJson.data.ups,
      dateCreated: dateCreatedString,
      upTime: timeDiffHrs,
      subreddit: postJson.data.subreddit,
      subredditId: postJson.data.subreddit_id,
      author: postJson.data.author
    };
    post.img = postJson.data.preview
      ? postJson.data.preview.images[0].source.url
      : "";
    postData.push(post);
  });
  return postData;
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await fetch("https://www.reddit.com/best.json?raw_json=1");
  const jsonResponse = await response.json();
  const formattedPosts = await handlePostsData(jsonResponse);
  return formattedPosts;
});

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

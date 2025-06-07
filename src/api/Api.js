import { createAsyncThunk } from "@reduxjs/toolkit";

const root = "https://www.reddit.com/"

export const getArticle = createAsyncThunk(
    "article/getArticle",
    async (fetchParams) => {
        const response = await fetch(`${root}r/${fetchParams.subreddit}/comments/${fetchParams.id}.json?raw_json=1`)
        const jsonResponse = await response.json();
        jsonResponse[0] = await handlePostsData(jsonResponse[0]);
        return jsonResponse
    }
)

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async () => {
  const response = await fetch(`${root}best.json?raw_json=1`);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  const formattedPosts = await handlePostsData(jsonResponse);
  return formattedPosts;
});

export const getCommunities = createAsyncThunk(
    "communities/getCommunities",
    async () => {
        const response = await fetch(`${root}subreddits.json`)
        const jsonResponse = await response.json();
        return jsonResponse
    }
);

export const getCommunityPosts = createAsyncThunk(
  'communityPosts/getCommunityPosts',
  async (communityName) => {
    const response = await fetch(`${root}r/${communityName}.json?raw_json=1`)
    const jsonResponse = await response.json();
    const formattedPosts = await handlePostsData(jsonResponse);
    return formattedPosts;
  }
)

export const handlePostsData = async (json) => {
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
      body: postJson.data.selftext_html,
      numUpvotes: postJson.data.ups,
      dateCreated: dateCreatedString,
      upTime: timeDiffHrs,
      subreddit: postJson.data.subreddit,
      subredditId: postJson.data.subreddit_id,
      author: postJson.data.author
    };
    if(postJson.data.preview) {
      post.img = postJson.data.preview.images[0].source.url
    } else if(postJson.data.media_metadata) {
      const imagesArray = [];
      for (const property in postJson.data.media_metadata) {
        imagesArray.push(postJson.data.media_metadata[property].s.u);
      }
      post.img = imagesArray;
    }
    postData.push(post);
  });
  return postData;
};
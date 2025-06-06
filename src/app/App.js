import React, { useEffect } from 'react';
import { Route, BrowserRouter, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Navbar from "./Navbar";
import Posts from "../features/posts/Posts";
import Article from "../features/article/Article";
import Search from '../features/search/SearchPage'
import CommunityPosts from '../features/communityPosts/CommunityPosts'


const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Navbar />}>
    <Route path="/" element={<Posts />} />
    <Route path="/:subreddit/:articleId" element={<Article/>} />
    <Route path="/search" element={<Search />} />
    <Route path="/r/:communityName" element={<CommunityPosts />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;

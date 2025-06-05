import React, { useEffect } from 'react';
import { Route, BrowserRouter, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Navbar from "./Navbar";
import Posts from "../features/posts/Posts";
import Article from "../features/article/Article";
import Search from '../features/search/SearchPage'


const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Navbar />}>
    <Route path="/" element={<Posts />} />
    <Route path="/:subreddit/:articleId" element={<Article/>} />
    <Route path="/search" element={<Search />} />
    {/*<Route path="community/:communityId" element={<Community/>} />
    <Route path="profile/:profileId" element={<Profile/>} />
    <Route path="search" element={<SearchPage/>} />*/}
  </Route>
))

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;

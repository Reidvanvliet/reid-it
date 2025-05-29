import './App.css';
import React from 'react';
import { Route, BrowserRouter, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Navbar />}>
    <Route path="article/:articleId" element={<Article/>} />
    <Route path="community/:communityId" element={<Community/>} />
    <Route path="profile/:profileId" element={<Profile/>} />
    <Route path="search" element={<SearchPage/>} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;

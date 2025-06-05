import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../posts/postsSlice";

const CommunitiesSidebar = ({sidebarStyle}) => {
  const allPosts = useSelector(selectPosts);

  const communities = [];

  allPosts.map((post) => {
    if (!communities.includes(post.subreddit)) {
      communities.push(post.subreddit);
    }
  });

  return (
    <>
      <div style={sidebarStyle} className="side-bar" id="sidebar">
        {communities.map((community) => {
          return <h3>{community}</h3>;
        })}
      </div>
    </>
  );
};

export default CommunitiesSidebar;

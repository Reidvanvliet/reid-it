import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostMedia from "../../components/PostMedia";
import Vote from "../../components/Vote";

const Post = ({ post }) => {

  return (
    <>
      <div className="post">
        <Link to={`/${post.subreddit}/${post.id}`}>
          <h1>{post.title}</h1>
        </Link>
        <div className="post-content">
          <div className="vote-container">
            <Vote votes={post.numUpvotes} postId={post.id} />

            {post.upTime > 24 ? <p className="uptime">{Math.round(post.upTime/24)} day(s) ago</p> : <p className="uptime">{post.upTime} hrs. ago</p>}
          </div>
          <Link to={`/${post.subreddit}/${post.id}`}>
            <div className="post-body">
              <PostMedia postMedia={post.img} />
              {post.body ? <div
                className="post-body-article"
                dangerouslySetInnerHTML={{ __html: post.body }}
              /> : '' }
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Post;

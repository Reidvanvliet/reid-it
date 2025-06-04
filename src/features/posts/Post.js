import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Vote from "../../components/Vote";

const Post = ({ post }) => {
  const [image, setImage] = useState("");

  const checkImage = () => {
    if (Array.isArray(post.img)) {
      setImage(post.img[0]);
    } else if (post.img) {
      setImage(post.img);
    }
  };

  useEffect(() => {
    checkImage();
  }, []);

  return (
    <>
      <div className="post">
        <Link to={`/${post.subreddit}/${post.id}`}>
          <h1>{post.title}</h1>
        </Link>
        <div className="post-content">
          <div className="vote-container">
            <Vote votes={post.numUpvotes} postId={post.id} />

            <p className="uptime">{post.upTime} hr. ago</p>
          </div>
          <Link to={`/${post.subreddit}/${post.id}`}>
            <div className="post-body">
              {image ? <img className="post-image" src={image} /> : ""}
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

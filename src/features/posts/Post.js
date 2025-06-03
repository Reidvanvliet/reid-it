import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Post = ({ post, index }) => {
  const [image, setImage] = useState("")

  const checkImage = () => {
    if(Array.isArray(post.img)) {
    setImage(post.img[0])
  } else if(post.img) {
    setImage(post.img)
  }
  }

  useEffect(() => {
    checkImage();
  },[])

  

  return (
    <Link to={`/article/${index}`}>
    <div className="post">
      <h1>{post.title}</h1>
      <div className="post-content">
        <div className="vote-container">
          <button className="upvote">
            <svg viewBox="0 0 20 20" height="100" width="100">
              <path d="M10 19c-.072 0-.145 0-.218-.006A4.1 4.1 0 0 1 6 14.816V11H2.862a1.751 1.751 0 0 1-1.234-2.993L9.41.28a.836.836 0 0 1 1.18 0l7.782 7.727A1.751 1.751 0 0 1 17.139 11H14v3.882a4.134 4.134 0 0 1-.854 2.592A3.99 3.99 0 0 1 10 19Z"></path>
            </svg>
          </button>
          <br/>
          <p className="numUpvotes">{post.numUpvotes}</p>
          <button className="downvote">
            <svg viewBox="0 0 20 20" height="100" width="100">
              <path d="M10 1c.072 0 .145 0 .218.006A4.1 4.1 0 0 1 14 5.184V9h3.138a1.751 1.751 0 0 1 1.234 2.993L10.59 19.72a.836.836 0 0 1-1.18 0l-7.782-7.727A1.751 1.751 0 0 1 2.861 9H6V5.118a4.134 4.134 0 0 1 .854-2.592A3.99 3.99 0 0 1 10 1Z"></path>
            </svg>
          </button>
          <p className="uptime">{post.upTime} hr. ago</p>
        </div>
        <div className="post-body">
          {image ? <img className="post-image" src={image} /> : ""}
          <div className="post-body-article" dangerouslySetInnerHTML={{__html: post.body}} />
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Post;

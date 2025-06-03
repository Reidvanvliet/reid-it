import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../features/posts/postsSlice";
import { mockData } from "../mockData/mockData";
import Comments from '../features/comments/Comments'

const Article = () => {
  const params = useParams();
  const articleIndex = params.articleId;
  const allPosts = useSelector(selectPosts);
  const post = allPosts[articleIndex];

  return (
    <>
      <div className="post">
        <h1>{post.title}</h1>
        <div className="post-content">
          <div className="post-body">
            {post.img ? <img className="post-image" src={post.img} /> : ""}
            <p className="post-body-article">{post.body}</p>
          </div>
        </div>
      </div>

      <div className="article-interact-container">
        <button className="upvote">
          <svg viewBox="0 0 20 20" height="100" width="100">
            <path d="M10 19c-.072 0-.145 0-.218-.006A4.1 4.1 0 0 1 6 14.816V11H2.862a1.751 1.751 0 0 1-1.234-2.993L9.41.28a.836.836 0 0 1 1.18 0l7.782 7.727A1.751 1.751 0 0 1 17.139 11H14v3.882a4.134 4.134 0 0 1-.854 2.592A3.99 3.99 0 0 1 10 19Z"></path>
          </svg>
        </button>
        <p className="numUpvotes">{post.numUpvotes}</p>
        <button className="downvote">
          <svg viewBox="0 0 20 20" height="100" width="100">
            <path d="M10 1c.072 0 .145 0 .218.006A4.1 4.1 0 0 1 14 5.184V9h3.138a1.751 1.751 0 0 1 1.234 2.993L10.59 19.72a.836.836 0 0 1-1.18 0l-7.782-7.727A1.751 1.751 0 0 1 2.861 9H6V5.118a4.134 4.134 0 0 1 .854-2.592A3.99 3.99 0 0 1 10 1Z"></path>
          </svg>
        </button>
        <p className="uptime">{post.upTime} hr. ago</p>
      </div>
      <div className="article-info">
        <p>r/{post.subreddit}</p>
        <p>{post.author}</p>
      </div>
      <Comments post={post} />
    </>
  );
};

export default Article;

import React, { useState, useEffect } from "react";

const Comment = ({ comment }) => {
  const [displayComment, setDisplayComment] = useState(false);

  const getCommentAge = () => {
    const currentTime = Date.now();
    const timeDiff = currentTime - comment.data.created * 1000;
    const timeDiffHrs = Math.round(timeDiff / 1000 / 60 / 60);
    return timeDiffHrs;
  };

  return (
    <div>
      <h3>{comment.data.author}</h3>
      <p>{getCommentAge()} hr. ago</p>
      <p>{comment.data.body}</p>
      <div className="vote-container-comment">
        <button className="upvote">
          <svg viewBox="0 0 20 20" height="100" width="100">
            <path d="M10 19c-.072 0-.145 0-.218-.006A4.1 4.1 0 0 1 6 14.816V11H2.862a1.751 1.751 0 0 1-1.234-2.993L9.41.28a.836.836 0 0 1 1.18 0l7.782 7.727A1.751 1.751 0 0 1 17.139 11H14v3.882a4.134 4.134 0 0 1-.854 2.592A3.99 3.99 0 0 1 10 19Z"></path>
          </svg>
        </button>
        <br />
        <p className="numUpvotes">{comment.data.score}</p>
        <button className="downvote">
          <svg viewBox="0 0 20 20" height="100" width="100">
            <path d="M10 1c.072 0 .145 0 .218.006A4.1 4.1 0 0 1 14 5.184V9h3.138a1.751 1.751 0 0 1 1.234 2.993L10.59 19.72a.836.836 0 0 1-1.18 0l-7.782-7.727A1.751 1.751 0 0 1 2.861 9H6V5.118a4.134 4.134 0 0 1 .854-2.592A3.99 3.99 0 0 1 10 1Z"></path>
          </svg>
        </button>
      </div>
      {comment.data.replies && (
        <button onClick={(e) => setDisplayComment(true)}>open</button>
      )}
      {comment.data.replies && (
        <button onClick={(e) => setDisplayComment(false)}>close</button>
      )}
      {displayComment && (
        <div style={{"padding-left": "3rem"}}>
          {comment.data.replies.data.children.map((reply, index) => (
            <Comment key={index} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;

import React, { useState, useEffect } from "react";
import Vote from '../../components/Vote'

const Comment = ({ comment }) => {
  const [displayComment, setDisplayComment] = useState(false);

  const getCommentAge = () => {
    const currentTime = Date.now();
    const timeDiff = currentTime - comment.data.created * 1000;
    const timeDiffHrs = Math.round(timeDiff / 1000 / 60 / 60);
    return timeDiffHrs;
  };

  return (
    <div className="comment">
      <h3>{comment.data.author}</h3>
      <p className="age">{getCommentAge()} hr. ago</p>
      <p className="body">{comment.data.body}</p>
      <div className="vote-container-comment">
        <Vote votes={comment.data.score} postId={comment.data.id} key={comment.data.id} />
      </div>
      {comment.data.replies && (
        <button className="replies-interact" onClick={(e) => setDisplayComment(true)}>+</button>
      )}
      {comment.data.replies && (
        <button className="replies-interact" onClick={(e) => setDisplayComment(false)}>-</button>
      )}
      {displayComment && (
        <div style={{"paddingLeft": "3rem"}}>
          {comment.data.replies.data.children.map((reply) => (
            reply.data.depth < 3 ?
            <Comment key={reply.id} comment={reply} /> : <p className="comment">This is as far as the api will go...</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;

import React,{ useState } from 'react';

const Vote = ({votes, postId}) => {
    const [upvoted, setUpvoted] = useState(false);
    const [downvoted, setDownvoted] = useState(false);

    const upvoteButton = () => {
        if(!upvoted && !downvoted) {
            setUpvoted(true);
           document.getElementById(postId + "up").style.fill = "rgb(0, 173, 9)";
        } else if(!upvoted && downvoted) {
            setUpvoted(true);
            setDownvoted(false);
           document.getElementById(postId + "up").style.fill = "rgb(0, 173, 9)";
           document.getElementById(postId + 'down').style.fill = 'grey'
        } else if (upvoted) {
            setUpvoted(false);
            document.getElementById(postId + "up").style.fill = "grey";
        }
    }


    const downvoteButton = () => {
        if(!upvoted && !downvoted) {
            setDownvoted(true);
           document.getElementById(postId + 'down').style.fill = "rgb(211, 31, 31)";
        } else if(upvoted && !downvoted) {
            setUpvoted(false);
            setDownvoted(true);
           document.getElementById(postId + 'down').style.fill = "rgb(211, 31, 31)";
           document.getElementById(postId + "up").style.fill = 'grey'
        } else if (downvoted) {
            setDownvoted(false);
            document.getElementById(postId + 'down').style.fill = "grey";
        }
    }

    return (
        <>
        <button onClick={(e) => upvoteButton()} className="upvote">
            <svg id={postId + "up"} viewBox="0 0 20 20" height="100" width="100">
              <path d="M10 19c-.072 0-.145 0-.218-.006A4.1 4.1 0 0 1 6 14.816V11H2.862a1.751 1.751 0 0 1-1.234-2.993L9.41.28a.836.836 0 0 1 1.18 0l7.782 7.727A1.751 1.751 0 0 1 17.139 11H14v3.882a4.134 4.134 0 0 1-.854 2.592A3.99 3.99 0 0 1 10 19Z"></path>
            </svg>
          </button>
          <br/>
          <p className="numUpvotes">{votes}</p>
          <button onClick={(e) => downvoteButton()} className="downvote">
            <svg id={postId + 'down'} viewBox="0 0 20 20" height="100" width="100">
              <path d="M10 1c.072 0 .145 0 .218.006A4.1 4.1 0 0 1 14 5.184V9h3.138a1.751 1.751 0 0 1 1.234 2.993L10.59 19.72a.836.836 0 0 1-1.18 0l-7.782-7.727A1.751 1.751 0 0 1 2.861 9H6V5.118a4.134 4.134 0 0 1 .854-2.592A3.99 3.99 0 0 1 10 1Z"></path>
            </svg>
          </button>
        </>
    )
}

export default Vote;
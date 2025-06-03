import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Comments from '../comments/Comments'
import { getArticle, isLoading, selectArticle } from "./articleSlice";
import Spinner from "../../components/Spinner"

const Article = () => {
  const dispatch = useDispatch();
  const isLoadingArticle = useSelector(isLoading);
  const params = useParams();
  const fetchParams = {
    id: params.articleId,
    subreddit: params.subreddit
  }
  const article = useSelector(selectArticle);
  const [image, setImage] = useState("");
  const [postAge, setPostAge] = useState(null);

  const getPostAge = () => {
    const currentTime = Date.now();
    const timeDiff = currentTime - article[0].data.children[0].data.created * 1000;
    const timeDiffHrs = Math.round(timeDiff / 1000 / 60 / 60);
    setPostAge(timeDiffHrs);
  };
  
    const checkImage = () => {
      if(article[0].data.children[0].data.preview) {
      setImage(article[0].data.children[0].data.preview.images[0].source.url)
    } else if(article[0].data.children[0].data.media_metadata) {
      const imageArray = [];
      const imageObjects = Object.values(article[0].data.children[0].data.media_metadata);
      imageObjects.map((obj) => {
        imageArray.push(obj.s.u);
      })
      setImage(imageArray[0])
    }
  }

    useEffect(() => {
      dispatch(getArticle(fetchParams));
    },[dispatch])

    useEffect (() => {
      if(isLoadingArticle === false) {
      checkImage();
      getPostAge();
      }
    })

    //const post = article[0].data.children[0].data;

    if(isLoadingArticle) {
      return <Spinner />
    }

  return (
    <>
    <div className="post">
        <h1>{article[0].data.children[0].data.title}</h1>
        <div className="post-content">
          <div className="post-body">
          {image ? <img className="post-image" src={image} /> : ""}
          <div className="post-body-article" dangerouslySetInnerHTML={{__html: article[0].data.children[0].data.selftext_html}} />
        </div>
        </div>
      </div>

      <div className="article-interact-container">
        <button className="upvote">
          <svg viewBox="0 0 20 20" height="100" width="100">
            <path d="M10 19c-.072 0-.145 0-.218-.006A4.1 4.1 0 0 1 6 14.816V11H2.862a1.751 1.751 0 0 1-1.234-2.993L9.41.28a.836.836 0 0 1 1.18 0l7.782 7.727A1.751 1.751 0 0 1 17.139 11H14v3.882a4.134 4.134 0 0 1-.854 2.592A3.99 3.99 0 0 1 10 19Z"></path>
          </svg>
        </button>
        <p className="numUpvotes">{article[0].data.children[0].data.score}</p>
        <button className="downvote">
          <svg viewBox="0 0 20 20" height="100" width="100">
            <path d="M10 1c.072 0 .145 0 .218.006A4.1 4.1 0 0 1 14 5.184V9h3.138a1.751 1.751 0 0 1 1.234 2.993L10.59 19.72a.836.836 0 0 1-1.18 0l-7.782-7.727A1.751 1.751 0 0 1 2.861 9H6V5.118a4.134 4.134 0 0 1 .854-2.592A3.99 3.99 0 0 1 10 1Z"></path>
          </svg>
        </button>
        <p className="uptime">{postAge} hr. ago</p>
      </div>
      <div className="article-info">
        <p>r/{article[0].data.children[0].data.subreddit}</p>
        <p>{article[0].data.children[0].data.author}</p>
      </div>
      <Comments comments={article[1].data.children} key={article[0].data.children[0].data.id} />
    </>
  );
};

export default Article;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Comments from '../comments/Comments'
import { isLoading, selectArticle } from "./articleSlice";
import { getArticle } from "../../api/Api";
import Spinner from "../../components/Spinner"
import Vote from "../../components/Vote"

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
    <div className="post" id="article">
        <h1>{article[0].data.children[0].data.title}</h1>
        <div className="post-content">
          <div className="post-body">
              {image ? <img className="post-image" src={image} /> : ""}
              {article[0].data.children[0].data.selftext_html ? <div
                className="post-body-article"
                dangerouslySetInnerHTML={{ __html: article[0].data.children[0].data.selftext_html }}
              /> : '' }
              </div>
        </div>
      </div>
      
      <div className="article-interact-container">
        <div className="vote-container-article">
          <Vote votes={article[0].data.children[0].data.score} postId={article[0].data.children[0].data.id} />
        </div>
      
      <div className="article-info">
        <p><strong>r/{article[0].data.children[0].data.subreddit}</strong></p>
        <p>{article[0].data.children[0].data.author}</p>
      </div>
      
    </div>
      <Comments comments={article[1].data.children} key={article[0].data.children[0].data.id} />
    </>
  );
};

export default Article;

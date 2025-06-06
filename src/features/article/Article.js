import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { isLoading, selectArticle } from "./articleSlice";
import { getArticle } from "../../api/Api";
import PostMedia from '../../components/PostMedia';
import Spinner from "../../components/Spinner";
import Vote from "../../components/Vote";
import Comments from '../comments/Comments';

const Article = () => {
  const dispatch = useDispatch();
  const isLoadingArticle = useSelector(isLoading);
  const params = useParams();
  const fetchParams = {
    id: params.articleId,
    subreddit: params.subreddit
  }
  const article = useSelector(selectArticle);

    useEffect(() => {
      dispatch(getArticle(fetchParams));
    },[dispatch])

    if(isLoadingArticle) {
      return <Spinner />
    }

  return (
    <>
    <div className="post" id="article">
        <h1>{article[0][0].title}</h1>
        <div className="post-content">
          <div className="post-body">
              <PostMedia postMedia={article[0][0].img}/>
              {article[0][0].body ? <div
                className="post-body-article"
                dangerouslySetInnerHTML={{ __html: article[0][0].body }}
              /> : '' }
              </div>
        </div>
      </div>
      
      <div className="article-interact-container">
        <div className="vote-container-article">
          <Vote votes={article[0][0].numUpvotes} postId={article[0][0].id} />
        </div>
      
      <div className="article-info">
        {article[0][0].upTime > 24 ? <p className="article-uptime">{Math.round(article[0][0].upTime)} day(s) ago</p> : <p className="article-uptime">{article[0][0].upTime} hrs. ago</p>}
        <p><strong>r/{article[0][0].subreddit}</strong></p>
        <p>{article[0][0].author}</p>
      </div>
      
    </div>
      <Comments comments={article[1].data.children} key={article[0][0].id} />
    </>
  );
};

export default Article;

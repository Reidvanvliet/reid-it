import { useEffect } from "react";
import { useParams } from "react-router";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { isLoading, selectCommunityPosts } from "./communityPostsSlice";
import { getCommunityPosts } from "../../api/Api";
import Post from '../posts/Post';
import Spinner from "../../components/Spinner";

const CommunityPosts = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoadingCommunityPosts = useSelector(isLoading);
  const params = useParams();
  const fetchParams = params.communityName;
  const communityPosts = useSelector(selectCommunityPosts);

  useEffect(() => {
    dispatch(getCommunityPosts(fetchParams));
  }, [dispatch, location]);

  if (isLoadingCommunityPosts) {
    return <Spinner />;
  }

  return (
    <div>
      {communityPosts.map((communityPost) => {
        return <Post post={communityPost} key={communityPost.id} />;
      })}
    </div>
  );
};

export default CommunityPosts;

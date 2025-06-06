import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, isLoading } from "./postsSlice";
import { getPosts } from "../../api/Api";
import Spinner from "../../components/Spinner";
import Post from "./Post";

const Posts = () => {
    const dispatch = useDispatch();
    const allPosts = useSelector(selectPosts);
    const isLoadingPosts = useSelector(isLoading);

    useEffect(() => {
        dispatch(getPosts());
    },[dispatch])
    
    if(isLoadingPosts) {
        return <Spinner />
    }

    return (
        <div>
            {allPosts.map((post) => {
                return <Post post={post} key={post.id} />
            })}
        </div>
    )
}

export default Posts;
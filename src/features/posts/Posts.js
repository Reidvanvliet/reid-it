import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, selectPosts, isLoading } from "./postsSlice";
import Spinner from "../../components/Spinner";
import store from "../../app/store";
import { mockData } from "../../mockData/mockData";
import Post from "./Post";
import { v4 as uuidv4 } from "uuid";

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
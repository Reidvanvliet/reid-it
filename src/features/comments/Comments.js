import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner";
import Comment from './Comment';

const Comments = ({post}) => {
    const dispatch = useDispatch();
    const isLoadingComments = useSelector(isLoading);
    const allComments = useSelector(selectComments);

    useEffect(() => {
        dispatch(getComments(post))
    }, [dispatch])

    if(isLoadingComments) {
       return <Spinner />
    }

    return (
        <>
            {allComments[1].data.children.map((comment, index) => {
                return <Comment comment={comment} key={index}/>
            })}
        </>
    )
}

export default Comments;
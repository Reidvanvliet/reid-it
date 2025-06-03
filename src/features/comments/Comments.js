import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner";
import Comment from './Comment';

const Comments = ({comments}) => {

    return (
        <>
            {comments.map((comment) => {
                return <Comment comment={comment} key={comment.id}/>
            })}
        </>
    )
}

export default Comments;
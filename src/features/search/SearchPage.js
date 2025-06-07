import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router';
import { selectPosts } from '../posts/postsSlice';
import Post from "../posts/Post";

const Search = () => {
    const allPosts = useSelector(selectPosts);
    const [searchParams] = useSearchParams();

    const searchTerm = searchParams.get('search');

     const filteredPosts = []

    allPosts.map((post) => {
        if(post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            filteredPosts.push(post);
        }
    });
    
    if(filteredPosts.length == 0) {
        return (
            <div className='post'>
                <h1>No Matching Posts</h1>
            </div>
        )
    }

    return (
        <div>
            {filteredPosts.map((post) => {
                return <Post post={post} key={post.id} />
            })}
        </div>
    )
}

export default Search;
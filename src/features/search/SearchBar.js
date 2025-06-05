import React, { useRef, useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

const SearchBar = () => {
    const navigate = useNavigate();

    const searchInputRef = useRef();

    const onSearchHandler = (e) => {
        e.preventDefault();

        const searchQuery = {
            search: searchInputRef.current.value
        }

        const searchParams = new URLSearchParams(searchQuery);

        navigate(`/search?${searchParams.toString()}`)
    }

    return (
        <input type="text" onChange={onSearchHandler} className='search' ref={searchInputRef} />
    )
}

export default SearchBar;
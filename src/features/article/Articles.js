import React, { useEffect, useState } from "react";

const Articles = () => {
    const [articles, setArticles] = useState()

    const getPosts = async () => {
        try {
            const response = await fetch('https://www.reddit.com/best.json?raw_json=1')
            if(response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                return jsonResponse
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        async function getArticleData() {
            const json = await getPosts();
            //handlePostsData call here
            setArticles(something.data.children[0].data.title);
        }
        getArticleData();
    }, []);

    const handlePostsData = (json) => {
        json.data.children.map((article) => {
            const post = {
                id: article.data.id,
                title: article.data.title,
                body: article.data.selftext,
                numUpvotes: article.data.ups,
                date: //oonvert the date from epoch

            }
            post.img = article.data.preview ? article.data.preview.images[0].source.url : "";
        })
    }

    return (
        <div>
            <p>{articles}</p>
        </div>
    )
}

export default Articles;
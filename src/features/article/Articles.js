import React, { useEffect, useState } from "react";

const Articles = () => {
    const [posts, setPosts] = useState()

    const getPosts = async () => {
        try {
            const response = await fetch('https://www.reddit.com/best.json?raw_json=1')
            if(response.ok) {
                const jsonResponse = await response.json();
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
            console.log(json);
            const handledPosts = await handlePostsData(json);
            setPosts(handledPosts);
        }
        getArticleData();
    }, []);

    const handlePostsData = async (json) => {
        const postData = []
        json.data.children.map((postJson) => {
            //convert date from epoch to string
            const dateCreated = new Date(postJson.data.created*1000)
            const dateCreatedString = dateCreated.toString();
            //get current time and subtract date created in ms, convert to hrs
            const currentTime = Date.now();
            const timeDiff = (currentTime - postJson.data.created*1000);
            const timeDiffHrs = Math.round(timeDiff/1000/60/60);
            const post = {
                id: postJson.data.id,
                title: postJson.data.title,
                body: postJson.data.selftext,
                numUpvotes: postJson.data.ups,
                dateCreated: dateCreatedString,
                upTime: timeDiffHrs,
                subreddit: postJson.data.subreddit,
                subredditId: postJson.data.subreddit_id,
                author: postJson.data.author,
                comments: []
            }
            post.img = postJson.data.preview ? postJson.data.preview.images[0].source.url : "";
            postData.push(post)
        })
        return postData;
    }

    return (
        <div>
            <p></p>
        </div>
    )
}

export default Articles;
import Header from "../Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentBlock from "../CommentBlock";
import uniqid from "uniqid";

const PostPage = () => {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const { postId } = useParams();

    // fetch post and comments at first render
    useEffect(() => {
        fetch("https://blog-api-ascodeasice.up.railway.app/posts/" + postId)
            .then(response => response.json())
            .then(response => setPost(response));

        fetch(`https://blog-api-ascodeasice.up.railway.app/posts/${postId}/comments`)
            .then(response => response.json())
            .then(response => {
                // sort by creation time
                response.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setComments(response);
            })
    }, []);


    return (
        <>
            <Header />
            <div className="postContent">
                <h1 className="title">
                    {post == null ? "Loading..." : post.title}
                </h1>
                <p className="postText">
                    {post == null ? "Loading..." : post.text}
                </p>
                <p className="authorName">{"By "}<a href={post == null ? "#" : `/blog-viewer/users/${post.author._id}`}>{post == null ? "Loading..." : post.author.username}</a></p>
            </div>
            <a href="/blog-viewer">
                <button className="linkButton">Home Page</button>
            </a>
            <a href={`/blog-viewer/posts/${postId}/comments`}>
                <button className="linkButton">Comment</button>
            </a>

            <div className="commentList">
                {comments.map((comment) => <CommentBlock key={uniqid()} comment={comment} />)}
            </div>
        </>
    );
}

export default PostPage;
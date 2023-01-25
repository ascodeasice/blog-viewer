const PostBlock = ({ post }) => {
    return <div className="postBlock">
        <h2>{post.title}</h2>
        <p className="postText">{post.text}</p>
        <p>By {post.author.username}</p>
    </div>
}

export default PostBlock;
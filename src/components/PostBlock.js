const PostBlock = ({ post }) => {
    return <div className="postBlock">
        <a className="postTitle" href={`/post/${post._id}`}>{post.title}</a>
        <p className="postText">{post.text}</p>
        <p>{"By "}
            <a href={`/users/${post.author._id}`}>
                {post.author.username}
            </a>
        </p>
    </div>
}

export default PostBlock;
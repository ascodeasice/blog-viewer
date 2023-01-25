const PostBlock = ({ post }) => {
    return <div className="postBlock">
        <a className="postTitle" href={`/blog-viewer/posts/${post._id}`}>{post.title}</a>
        <p className="postText">{post.text}</p>
        <p>{"By "}
            <a href={`/blog-viewer/users/${post.author._id}`}>
                {post.author.username}
            </a>
        </p>
    </div>
}

export default PostBlock;
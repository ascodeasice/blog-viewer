import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const PostBlock = ({ post }) => {
    return <div className="postBlock">
        <a className="postTitle" href={`/blog-viewer/posts/${post._id}`}>{post.title}</a>
        <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
            className="markdown">
            {post.text}
        </ReactMarkdown>
        <p>{"By "}
            <a href={`/blog-viewer/users/${post.author._id}`}>
                {post.author.username}
            </a>
        </p>
    </div>
}

export default PostBlock;
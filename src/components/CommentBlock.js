const CommentBlock = ({ comment }) => {
    return (
        <div className="commentBlock">
            <p className="authorName">{comment == null ? "Loading" : comment.authorName ? comment.authorName : "anonymous"}</p>
            <p className="text">{comment == null ? "Loading" : comment.text}</p>
        </div>
    );
}
export default CommentBlock;
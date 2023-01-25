const { DateTime } = require("luxon");

const CommentBlock = ({ comment }) => {
    const formatTime = (date) => {
        return DateTime.fromJSDate(new Date(date)).toFormat("yyyy/MM/dd, HH:mm");
    }

    return (
        <div className="commentBlock">
            <p className="authorName">{comment == null ? "Loading" : comment.authorName ? comment.authorName : "anonymous"}</p>
            <p className="text">{comment == null ? "Loading" : comment.text}</p>
            <p className="commentTime">{comment == null ? "Loading" : formatTime(comment.createdAt)}</p>
        </div>
    );
}
export default CommentBlock;
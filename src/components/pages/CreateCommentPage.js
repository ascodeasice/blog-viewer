import Header from "../Header";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
const uniqid = require("uniqid");

const CreateCommentPage = () => {
    const [authorName, setAuthorName] = useState("");
    const [text, setText] = useState("");
    const [created, setCreated] = useState(false);
    const [errors, setErrors] = useState([]);
    const { postId } = useParams();

    const onChangeName = (event) => {
        setAuthorName(event.target.value);
    }

    const onChangeText = (event) => {
        setText(event.target.value);
    }

    const createComment = () => {
        const body = {
            authorName: authorName,
            text: text,
        };

        fetch(`https://blog-api-ascodeasice.up.railway.app/posts/${postId}/comments`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }).then(response => response.json())
            .then(response => {
                if (Array.isArray(response)) {
                    // not valid data
                    setErrors(response);
                    return;
                } else {
                    setCreated(true);
                }
            })
    }

    if (created) {
        return (
            <>
                <Header />
                <p className="noteText">Comment Created</p>
                <a href={`/blog-viewer/posts/${postId}`}><button className="linkButton">Go to Post</button></a>
                <a href={`/blog-viewer`}><button className="linkButton">Home Page</button></a>
            </>
        );
    } else {
        return (
            <>
                <Header />
                <div className="commentForm">
                    <label htmlFor="authorName" placeholder="anonymous">Name(Optional)</label>
                    <input id="authorName" onChange={onChangeName} type="text" />
                    <label htmlFor="commentText">Text</label>
                    <textarea onChange={onChangeText} />
                    <button className="submitButton linkButton" onClick={createComment}>Submit</button>
                </div>
                <ul>
                    {errors.map(error => <li className="errorMessage" key={uniqid()}>{error.msg}</li>)}
                </ul>
            </>
        );
    }
}

export default CreateCommentPage;

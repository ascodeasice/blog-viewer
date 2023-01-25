import Header from "../Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const UserPage = () => {
    const [user, setUser] = useState(null);
    let { userId } = useParams();

    useEffect(() => {
        fetch("https://blog-api-ascodeasice.up.railway.app/users/" + userId)
            .then(response => response.json())
            .then(response => setUser(response))
    }, []);

    return (
        <>
            <Header />
            <div className="userInfoContainer">
                <h1 className="userName">
                    {user == null ? "Loading..." : user.username}
                </h1>
                <p className="bio">
                    {user == null ? "Loading..." : user.bio}
                </p>
            </div>
            <a href="/blog-viewer"><button className="linkButton">Home Page</button></a>
        </>
    );
}

export default UserPage;
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
                <h1 style={{ color: "white" }}>
                    {user == null ? "Loading..." : user.username}
                </h1>
                <div className="bioContainer">

                    <p>
                        {user == null ? "Loading..." : user.bio}
                    </p>
                </div>
                <a href="/"><button className="linkButton">Home Page</button></a>
            </div>
        </>
    );
}

export default UserPage;
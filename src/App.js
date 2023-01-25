import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import uniqid from 'uniqid';
import PostBlock from "./components/PostBlock";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://blog-api-ascodeasice.up.railway.app/posts")
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setPosts(response);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="postContainer">
        {posts.map((post) => <PostBlock key={uniqid()} post={post} />)}
      </div>
    </div >
  );
}

export default App;

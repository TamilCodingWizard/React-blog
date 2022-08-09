import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Post from "../../components/post/Post";
import "./Home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const jsonResponse = await response.json();

      if (response.ok) {
        setPosts(jsonResponse);
        setError("")
      }

      if (!response.ok) {
        setError(jsonResponse.error);
      }
    };

    fetchPosts();
  }, []);

  return (<div className="container">
    {
      posts && posts.map((post) => {
        return <Post post={post} key={post.id}/>
      })
    }
    {
      error && <p>{error}</p>
    }

  </div>)
}

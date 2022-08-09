import React from "react";
import { useNavigate } from "react-router-dom";
import "./Post.css";

export default function Post({post}) {

  const navigate = useNavigate()


  const handleClick = () => {
    navigate(`/post/${post.id}`,{state:post})
  }

  return (
    <div className="card" onClick={handleClick}>
      <h5 className="card-header">{post.title}</h5>
      <div className="card-body">
        <p className="card-text">
          {post.body}
        </p>
      </div>
    </div>
  );
}

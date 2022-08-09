import React from "react";
import "./Post.css";

export default function Post({post}) {
  return (
    <div className="card">
      <h5 className="card-header">{post.title}</h5>
      <div className="card-body">
        <p className="card-text">
          {post.body}
        </p>
      </div>
    </div>
  );
}

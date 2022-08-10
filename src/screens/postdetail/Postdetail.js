import React from "react";
import "./Postdetail.css";
import { useLocation,useNavigate } from "react-router-dom";

export default function Postdetail() {
  const location = useLocation();

  const { state : post} = location;


  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/edit/${post.id}`,{state:post})
  }

  return (
    <div className="container outer">
      <div className="jumbotron">
        <h1 className="display-4">{post.title}</h1>
        <p className="lead">{post.body}</p>
        <div className="float-end">
          <button type="submit" className="btn btn-primary">
            Delete
          </button>

          <div className="float-end"></div>
          <button type="submit" className="btn btn-primary" onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

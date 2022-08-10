import React from "react";
import "./Postdetail.css";
import { useLocation } from "react-router-dom";

export default function Postdetail() {
  const location = useLocation();

  const { state } = location;

  console.log(state);

  return (
    <div className="container outer">
      <div className="jumbotron">
        <h1 className="display-4">{state.title}</h1>
        <p className="lead">{state.body}</p>
        <div className="float-end">
          <button type="submit" className="btn btn-primary">
            Delete
          </button>

          <div className="float-end"></div>
          <button type="submit" className="btn btn-primary">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

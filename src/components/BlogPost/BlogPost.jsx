import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import blogPosts from "../../data/data.json";
import "./BlogPostStyle.css";
export default function BlogPostFunctional() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState("");
  const [author, setAuthor] = useState("");

  //React Router hook to get the query parameters from the URL
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  //when the page renders, check through the json "data base" of articles for the one matching the specified id
  useEffect(() => {
    blogPosts.blogPosts.forEach((item, index) => {
      var idQuery = query.get("id");

      // if there is a match, state for the component is set to the data stored in the JSON
      if (item.id == idQuery) {
        setId(item.id);
        setTitle(item.title);
        setBody(item.body);
        setAuthor(item.author);
      }
    });
    //if nothing is found, it shows a "not found" message
    if (id == "") {
      setTitle("Post not found.");
    }
  });

  return (
    <div className="post">
      <h2>{title}</h2>
      <h4 className="author">By: {author}</h4>
      <p className="post-body">{body}</p>
    </div>
  );
}

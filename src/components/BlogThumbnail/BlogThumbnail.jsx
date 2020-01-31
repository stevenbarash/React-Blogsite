import React from "react";
import "./BlogThumbnailStyle.css";
export default function BlogThumbnail(props) {
  return (
    //displays the title of the post, a preview of the first 100 characters of the post as well as post author
    <div>
      {/* clicking on the post appends the id of the post to a query in the URL to be used by the "BlogPost" component to display the proper post */}
      <a href={"/post?id=" + props.id}>
        <h2 className="title">{props.title}</h2>
        <p className="body-preview">{props.body.slice(0, 100) + "..."}</p>
      </a>
      <h5 className="author">{props.author}</h5>
      <hr />
    </div>
  );
}

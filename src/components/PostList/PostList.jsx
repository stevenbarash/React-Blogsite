import React from "react";
import BlogThumbnail from "../BlogThumbnail/BlogThumbnail";
import "./PostListStyle.css";
//component for display a list of blog posts
//the posts are fed into the component through the "blogPosts" prop
export default function PostList(props) {
  return (
    <div className="post-list">
      <div className="posts-container">
        {/* each post within the array of posts is mapped to a BlogThumbnail component to be displayed */}
        {props.blogPosts.blogPosts.map(post => {
          return (
            <BlogThumbnail
              className="blog-card"
              key={post.id}
              id={post.id}
              author={post.author}
              title={post.title}
              body={post.body}
              thumbnail={post.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
}

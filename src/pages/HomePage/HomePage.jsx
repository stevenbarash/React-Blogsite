import React from "react";
import blogPosts from "../../data/data.json";
import PostList from "../../components/PostList/PostList";

export default function HomePage() {
  return (
    /* Feeds the blogPosts json into the PostList component */

    <div className="home-page">
      <PostList blogPosts={blogPosts} />
    </div>
  );
}

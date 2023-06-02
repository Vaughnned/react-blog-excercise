import { useState } from "react";

export default function BlogPost() {
  const [blogText, setBlogText] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogPosts, setblogPosts] = useState([]);

  console.log(blogPosts);

  function blogSubmission(event) {
    event.preventDefault();
    const newPost = { text: blogText, title: blogTitle };
    setblogPosts([...blogPosts, newPost]);
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      <form onSubmit={blogSubmission}>
        <input
          type="text"
          placeholder="Blog Title"
          value={blogTitle}
          onChange={(event) => setBlogTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Blog Post"
          value={blogText}
          onChange={(event) => setBlogText(event.target.value)}
        />
        <label>Submit Blog</label>
        <input type="submit" />
      </form>
      {blogPosts.map((blogPost) => (
        <>
          <div>{blogPost.text}</div>
          <div>{blogPost.title}</div>
        </>
      ))}
    </div>
  );
}

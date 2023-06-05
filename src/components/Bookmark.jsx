import { useState } from "react";

const initialBookmark = { title: "", url: "", tag: "" };

export default function Bookmark() {
  const [bookmark, setBookmark] = useState(initialBookmark);
  const [bookmarkList, setBookmarkList] = useState([]);
  const [filter, setFilter] = useState("");

  function bookmarkSubmission(event) {
    event.preventDefault();
    setBookmarkList([...bookmarkList, bookmark]);
    setBookmark(initialBookmark);
  }

  function handleInput(e) {
    setBookmark({ ...bookmark, [e.target.name]: e.target.value });
  }

  const tagList = [...new Set(bookmarkList.map((bookmark) => bookmark.tag))];
  console.log({ filter });

  const bookmarksHTML = bookmarkList
    .filter((bookmark) => (filter ? bookmark.tag === filter : bookmark))
    .map((bookmark, index) => (
      <li key={index}>
        <div
          style={{
            height: "2px",
            width: "100%",
            backgroundColor: "#fff",
            marginTop: "50px",
          }}
        />
        <div>
          <h2>{bookmark.title}</h2>
          <a href={bookmark.url}>click me</a>
        </div>
      </li>
    ));

  return (
    <div>
      <form onSubmit={bookmarkSubmission}>
        <h1>Bookmark</h1>
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={bookmark.title}
          onChange={handleInput}
          required
        />
        <input
          name="url"
          type="text"
          placeholder="URL"
          value={bookmark.url}
          onChange={handleInput}
          required
        />
        <input
          name="tag"
          type="text"
          placeholder="Tag"
          value={bookmark.tag}
          onChange={handleInput}
          required
        />

        <input type="submit" />
      </form>
      <button onClick={() => setFilter("")}>All</button>
      {tagList.map((tag, index) => (
        <button key={index} onClick={() => setFilter(tag)}>
          {tag}
        </button>
      ))}
      <ul style={{ listStyle: "none", marginTop: "50px", padding: "0px" }}>
        {bookmarksHTML}
      </ul>
    </div>
  );
}

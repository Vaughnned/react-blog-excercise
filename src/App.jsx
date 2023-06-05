import "./App.css";
// import BlogPost from "./components/BlogPost";
// import { useEffect, useState } from "react";
// import PersonalInfo from "./components/PersonalInfo";
import Bookmark from "./components/Bookmark";

function App() {
  // const [name, setName] = useState("");

  // useEffect(() => {
  //   // localStorage.setItem("name", "Charles");
  // }, []);

  // function getCharles() {
  //   const lsCharles = localStorage.getItem("name");
  //   setName(lsCharles);
  // }

  return (
    <>
      {/* <BlogPost /> */}
      {/* <PersonalInfo /> */}
      <Bookmark />
      {/* <h1>dogs name is {name} </h1>
      <button onClick={() => getCharles()}>Find Him</button> */}
    </>
  );
}

export default App;

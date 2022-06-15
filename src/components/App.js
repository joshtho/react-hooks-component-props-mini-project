import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "../components/About"
import ArticleList from "../components/ArticleList"
console.log(blogData);
console.log(blogData.posts)
function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About about={blogData.about} image={blogData.image} />
      <ArticleList />
    </div>
  );
}

export default App;

import React from "react";
import "./styles.css";

export default function App() {
  return <Article>Replace me with an article</Article>;
}
function Article() {
  return (
    <article>
      <h2 className="article_title">I am the title</h2>
      <label htmlFor="my-input">I am the label</label>
      <input type="text" id="my-input" />
    </article>
  );
}

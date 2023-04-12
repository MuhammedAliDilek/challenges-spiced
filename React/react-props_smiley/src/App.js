import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley Happy />
}
function Smiley({Happy}) {
  return <h1>{Happy ? "😁" : "😭"}</h1>;}
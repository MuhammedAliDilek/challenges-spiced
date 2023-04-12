import React from "react";
import "./styles.css";
// not my code I looked at other peoples code when I couldn`t solve it
export default function App() {
return <Sum valueA={6} valueB={4} />;
}

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <h1>
      {valueA} + {valueB} = {sum}
    </h1>
  );
}
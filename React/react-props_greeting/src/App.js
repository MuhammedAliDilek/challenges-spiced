import "./styles.css";

export default function App() {
  return <Greeting name="Fatih" />;
}

function Greeting({ name }) {
  return <h1>Hello, {name === "Fatih" ? "Coach" : name}!</h1>;
}

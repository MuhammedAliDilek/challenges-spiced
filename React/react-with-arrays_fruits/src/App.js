import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id:1,
      name: "🍎 Red apple",
      color: "red",
    },
    {
      id:2,
      name:"🍊 Orange",
      color: "orange",
    },
    {
      id:3,
      name:"🍌 banana",
      color: "yellow",
    },
    {
      id:4,
      name:"🍉 Watermelon",
      color: "green",
    },
    {
      id:5,
      name:"🍇 Grape",
      color: "purple",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit, index) => {
        return <Card key={index} fruit={fruit} />
      })}
    </div>
  );
}

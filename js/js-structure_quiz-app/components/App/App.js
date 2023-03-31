import { Header } from "../Header/Header.js";
import { Form } from "../Form/Form.js";
import { CardList } from "../CardList/CardList.js";
import { Card } from "../Card/card.js";

export function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList(Card));

  return app;
}

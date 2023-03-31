// Store the cards in a global state
import { App } from "./components/App/App.js";

//
//import { Bookmark } from "./components/Bookmark/bookmark.js";   I dont need this anymore here
//

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();

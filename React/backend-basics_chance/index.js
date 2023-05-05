// import { server } from "./server.js";
import { server } from "./server.js";
import { Chance } from "chance";
// server.listen(…
const port = 8000;
server.listen(port, () => {
  console.log(`Server running at http:localhost:${port}/`);
});

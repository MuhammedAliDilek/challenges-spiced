import { createServer } from "node:http";
import Chance from "chance";
// export const server = …
const chance = new Chance();
export const server = createServer((req, res) => {
  res.statusCode = 200;
  const name = chance.name();
  const age = chance.age();
  const gender = chance.gender();
  const address = chance.address();
  const city = chance.city();
  const profession = chance.profession();
  res.end(
    `Hello my name is ${name} and I am ${age} years old ${gender}. I am a ${profession} working in ${city}. If you want to hunt me down I am waiting ${address}.`
  );
});

import { Chance } from "chance";

const chance = new Chance();

export default function handler(req, res) {
  const character = {
    name: chance.name(),
    age: chance.age(),
    gender: chance.gender(),
    occupation: chance.profession(),
    interests: chance.shuffle(["reading", "writing", "painting", "cooking"]),
  };
  res.status(200).json(character);
}

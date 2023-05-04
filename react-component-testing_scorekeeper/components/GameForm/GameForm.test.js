import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);
  const nameOfGameInput = screen.getByLabelText("Name of game");
  const playerNamesInput = screen.getByLabelText(
    "Player names, separated by comma"
  );
  const createGameButton = screen.getByRole("button", { name: "Create game" });
  expect(nameOfGameInput).toBeInTheDocument();
  expect(playerNamesInput).toBeInTheDocument();
  expect(createGameButton).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);
  const gameForm = screen.getByRole("form");
  expect(gameForm).toHaveAccessibleName("Create a new game");
});

test("submits the correct form data when every field is filled out", async () => {
  const onCreateGame = jest.fn();
  render(<GameForm onCreateGame={onCreateGame} />);
  const nameOfGameInput = screen.getByLabelText("Name of game");
  const playerNamesInput = screen.getByLabelText(
    "Player names, separated by comma"
  );
  const createGameButton = screen.getByRole("button", { name: "Create game" });
  const nameOfGameValue = "Dodelido";
  const playerNamesValue = "John Doe, Jane Doe";
  const playerNamesArray = ["John Doe", "Jane Doe"];
  userEvent.type(nameOfGameInput, nameOfGameValue);
  userEvent.type(playerNamesInput, playerNamesValue);
  userEvent.click(createGameButton);
  expect(onCreateGame).toHaveBeenCalledWith({
    nameOfGame: nameOfGameValue,
    playerNames: playerNamesArray,
  });
});

test("does not submit form if one input field is left empty", async () => {
  const onCreateGame = jest.fn();
  render(<GameForm onCreateGame={onCreateGame} />);
  const nameOfGameInput = screen.getByLabelText("Name of game");
  const playerNamesInput = screen.getByLabelText(
    "Player names, separated by comma"
  );
  const createGameButton = screen.getByRole("button", { name: "Create game" });
  const nameOfGameValue = "Dodelido";
  const playerNamesValue = "";
  userEvent.type(nameOfGameInput, nameOfGameValue);
  userEvent.type(playerNamesInput, playerNamesValue);
  userEvent.click(createGameButton);
  expect(onCreateGame).not.toHaveBeenCalled();
});

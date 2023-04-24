import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player name="Ali" score={0} />);
  const player = screen.getByText("Ali");
  const score = screen.getByText("0");
  const buttons = screen.getAllByRole("button");
  expect(player).toBeInTheDocument();
  expect(score).toBeInTheDocument();
  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const onIncreasePlayerScore = jest.fn();
  const onDecreasePlayerScore = jest.fn();
  render(
    <Player
      name="Ali"
      score={0}
      onIncreasePlayerScore={onIncreasePlayerScore}
      onDecreasePlayerScore={onDecreasePlayerScore}
    />
  );
  const increaseButton = screen.getByRole("button", { name: "Increase Score" });
  const decreaseButton = screen.getByRole("button", { name: "Decrease Score" });
  userEvent.click(increaseButton);
  expect(onIncreasePlayerScore).toHaveBeenCalledTimes(1);
  userEvent.click(decreaseButton);
  expect(onDecreasePlayerScore).toHaveBeenCalledTimes(1);
});

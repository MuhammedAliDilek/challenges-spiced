import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const labelText = "Name";
  const name = "name";
  const placeholder = "Enter your name";

  render(<Input labelText={labelText} name={name} placeholder={placeholder} />);

  const inputElement = screen.getByPlaceholderText(placeholder);

  expect(screen.getByLabelText(labelText)).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("name", name);
});
test("calls callback on every user input", async () => {
  const onChangeMock = jest.fn();
  const label = "Name";
  const name = "name";
  const placeholder = "Enter your name";

  render(
    <Input
      label={label}
      name={name}
      placeholder={placeholder}
      onChange={onChangeMock}
    />
  );

  const inputElement = screen.getByPlaceholderText(placeholder);
  const inputValue = "John Doe";

  await userEvent.type(inputElement, inputValue);

  expect(onChangeMock).toHaveBeenCalledTimes(inputValue.length);
});

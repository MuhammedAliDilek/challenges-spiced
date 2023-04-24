import { render, screen } from "@testing-library/react";
import Navigation from ".";
//import { playLink, historyLink } from "../../utils/links";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const links = screen.getAllByRole("link");
  //const historyLink = screen.getByRole("link");
  expect(links.length).toBe(2); //we have 2 links that are 'Play' and 'History'the lenght  should be 2
  //expect(historyLink).toBeInTheDocument();
});

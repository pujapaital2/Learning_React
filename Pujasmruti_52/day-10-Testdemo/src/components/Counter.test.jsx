import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders counter and increments value", () => {
  render(<Counter />);

  const button = screen.getByText("Increment");
  fireEvent.click(button);

  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});

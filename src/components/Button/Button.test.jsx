import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest"; 
import Button from "./Button";

test("Displays the passed text", () => {
  render(<Button buttonText="Click me" />);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});

test("Calls onButtonClick on click", () => {
  const handleClick = vi.fn(); 
  render(<Button buttonText="Click" onButtonClick={handleClick} />);
  
  const button = screen.getByText("Click");
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("Button is disabled if disabled=true", () => {
  render(<Button buttonText="Don't click" disabled />);
  const button = screen.getByText("Don't click");

  expect(button).toBeDisabled();
});

test("Passes the correct type", () => {
  render(<Button buttonText="Submit" type="submit" />);
  const button = screen.getByText("Submit");

  expect(button).toHaveAttribute("type", "submit");
});


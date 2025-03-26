import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import AdoptForm from "./AdoptForm";

const mockCat = { name: "Whiskers" };

test("Renders all form fields correctly", () => {
  render(<AdoptForm cat={mockCat} />);

  expect(screen.getByText(`Adopt ${mockCat.name}`)).toBeInTheDocument();
  
  expect(screen.getByLabelText("First Name")).toBeInTheDocument();
  expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
  expect(screen.getByLabelText("Phone")).toBeInTheDocument();
  expect(screen.getByLabelText("Email")).toBeInTheDocument();
  expect(screen.getByLabelText("City")).toBeInTheDocument();
  expect(screen.getByLabelText("Autonomous Community")).toBeInTheDocument();
  
  expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
});
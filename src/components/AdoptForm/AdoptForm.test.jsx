import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import AdoptForm from "./AdoptForm";

const mockCat = { name: "Whiskers" };

describe("AdoptForm", () => {
  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("Renders all form fields", () => {
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

  test("Shows validation errors for required fields", async () => {
    render(<AdoptForm cat={mockCat} />);
    
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));
    
    await waitFor(() => {
      expect(screen.getByText("First name is required")).toBeInTheDocument();
      expect(screen.getByText("Last name is required")).toBeInTheDocument();
      expect(screen.getByText("Phone number is required")).toBeInTheDocument();
      expect(screen.getByText("Email is required")).toBeInTheDocument();
      expect(screen.getByText("City is required")).toBeInTheDocument();
      expect(screen.getByText("Autonomous community is required")).toBeInTheDocument();
    });
  });

  test("Validates email format", async () => {
    render(<AdoptForm cat={mockCat} />);
    
    const emailInput = screen.getByLabelText("Email");
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));
    
    await waitFor(() => {
      expect(screen.getByText("Invalid email address")).toBeInTheDocument();
    });
  });

  test("Validates Spanish phone number", async () => {
    render(<AdoptForm cat={mockCat} />);
    
    const phoneInput = screen.getByLabelText("Phone");
    fireEvent.change(phoneInput, { target: { value: "123" } });
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));
    
    await waitFor(() => {
      expect(screen.getByText("Invalid Spanish phone number")).toBeInTheDocument();
    });
  });

  test("Submits form with valid data", async () => {
    render(<AdoptForm cat={mockCat} />);
    
    fireEvent.change(screen.getByLabelText("First Name"), { target: { value: "Alex" } });
    fireEvent.change(screen.getByLabelText("Last Name"), { target: { value: "Smith" } });
    fireEvent.change(screen.getByLabelText("Phone"), { target: { value: "+34611223344" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "alex@example.com" } });
    fireEvent.change(screen.getByLabelText("City"), { target: { value: "Madrid" } });
    fireEvent.change(screen.getByLabelText("Autonomous Community"), { target: { value: "Madrid" } });
  
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(screen.getByRole("button")).toBeDisabled();
    
    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith({
        firstName: "Alex",
        lastName: "Smith",
        phone: "+34611223344",
        email: "alex@example.com",
        city: "Madrid",
        autonomousCommunity: "Madrid",
        aboutMe: "",
      });
    });
  });

  test("Shows error message on submission failure", async () => {
  
    vi.useFakeTimers();
    
   
    const mockPromise = Promise.reject(new Error("API error"));
    vi.spyOn(global, "Promise").mockImplementationOnce(() => mockPromise);
    
    render(<AdoptForm cat={mockCat} />);
    
    
    fireEvent.change(screen.getByLabelText("First Name"), { target: { value: "Alex" } });
    fireEvent.change(screen.getByLabelText("Last Name"), { target: { value: "Smith" } });
    fireEvent.change(screen.getByLabelText("Phone"), { target: { value: "+34611223344" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "alex@example.com" } });
    fireEvent.change(screen.getByLabelText("City"), { target: { value: "Madrid" } });
    fireEvent.change(screen.getByLabelText("Autonomous Community"), { target: { value: "Madrid" } });
    

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));
    
    vi.runAllTimers();
    
    await waitFor(() => {
      expect(screen.getByText("There was a problem in your submission. Try again.")).toBeInTheDocument();
    });
    
    vi.useRealTimers();
  });
});
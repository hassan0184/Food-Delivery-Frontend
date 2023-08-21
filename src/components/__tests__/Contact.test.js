import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

it("Should load button inside contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  //Assertion
  expect(button).toBeInTheDocument();
});

it("Should load contact us component", () => {
  render(<Contact />);

  const buttonText = screen.getByText("Submit");

  //Assertion
  expect(buttonText).toBeInTheDocument();
});

it("should load all inputs of the contact components", () => {
  render(<Contact />);

  // Querying
  const inputs = screen.getAllByRole("textbox");

  //Assertion
  expect(inputs.length).toBe(2);
});

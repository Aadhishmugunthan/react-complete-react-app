import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "./App";

test("renders title", () => {
  render(<App />);

  const title = screen.getByText(
    /React User Management/i
  );

  expect(title).toBeInTheDocument();
});

test("renders form inputs", () => {
  render(<App />);

  expect(
    screen.getByLabelText(/Name/i)
  ).toBeInTheDocument();

  expect(
    screen.getByLabelText(/Email/i)
  ).toBeInTheDocument();

  expect(
    screen.getByLabelText(/Age/i)
  ).toBeInTheDocument();

  expect(
    screen.getByLabelText(/Nationality/i)
  ).toBeInTheDocument();
});

test("renders add button", () => {
  render(<App />);

  const button = screen.getByRole(
    "button",
    { name: /add/i }
  );

  expect(button).toBeInTheDocument();
});
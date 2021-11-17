import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders game details", () => {
  render(<App />);
  const linkElement = screen.getByText(/game details/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders chess board", () => {
  const { container } = render(<App />);
  const linkElement = container.querySelector("[data-boardid=humanVsComputer]");
  expect(linkElement).toBeInTheDocument();
});

test("renders black squares", () => {
  const { container } = render(<App />);
  const linkElement = container.querySelectorAll(
    "[data-testid=white-square]"
  ).length;
  expect(linkElement).toBe(32);
});

test("renders white squares", () => {
  const { container } = render(<App />);
  const linkElement = container.querySelectorAll(
    "[data-testid=black-square]"
  ).length;
  expect(linkElement).toBe(32);
});

test("moves piece", async () => {
  const { container } = render(<App />);

  const piece = container.querySelector("[data-testid=bP-b7]");
  const destination = container.querySelector("[data-squareid=b6]");

  setTimeout(async () => {
    await piece.click();
    await destination.click();
    let con = container.querySelector("[data-testid=bP-b6]");
    expect(con).toBeInTheDocument();
  }, 2000);
});

test("reset game", async () => {
  const { container } = render(<App />);

  const btn = container.querySelector("#reset-button");
  btn.click();
  const history = container.querySelectorAll("li").length;
  expect(history).toBe(0);
});

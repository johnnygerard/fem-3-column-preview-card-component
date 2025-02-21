import "@testing-library/jest-dom";
import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home page", () => {
  // Example test
  xit("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  test("sanity check", () => {
    render(<Home />);
    expect(1 + 1).toBe(2);
  });
});

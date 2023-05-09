// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import NavBar from "@/components/NavBar";
import "@testing-library/jest-dom";

describe("NavBar", () => {
  it("renders the navbar with links", () => {
    render(<NavBar />);

    // Check that the navbar heading is present
    const heading = screen.getByText("Batik Classifier");
    expect(heading).toBeInTheDocument();

    // Check that the "Home" link is present and has the correct href
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toHaveAttribute("href", "#");

    // Check that the "History" link is present and has the correct href
    const historyLink = screen.getByRole("link", { name: "History" });
    expect(historyLink).toHaveAttribute("href", "story");

    // Check that the "Types" link is present and has the correct href
    const typesLink = screen.getByRole("link", { name: "Types" });
    expect(typesLink).toHaveAttribute("href", "types");
  });
});

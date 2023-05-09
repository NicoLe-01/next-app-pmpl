// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import History from "@/components/History";
import "@testing-library/jest-dom";

describe("History", () => {
  it("renders a paragraph", () => {
    render(<History />);

    const paragraph = screen.getByText(
      /Batik is a technique of wax-resist dyeing applied to whole cloth/
    );

    expect(paragraph).toBeInTheDocument();
  });
});
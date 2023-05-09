// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import Types from "@/components/Types";
import "@testing-library/jest-dom";

describe("History", () => {
  it("renders a paragraph", () => {
    render(<Types />);

    const paragraph = screen.getByText(
      /Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis aspernatur sunt explicabo, velit aperiam assumenda exercitationem/
    );

    expect(paragraph).toBeInTheDocument();
  });
});

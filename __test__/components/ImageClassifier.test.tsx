import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ImageClassifier from "@/components/ImageClassifier";
import "@testing-library/jest-dom";

describe("ImageClassifier component", () => {
  it("renders the title correctly", () => {
    render(<ImageClassifier />);
    const titleElement = screen.getByText(/Batik Classifier/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the upload form correctly", () => {
    render(<ImageClassifier />);
    const fileInput = screen.getByLabelText(/Input Image/i);
    expect(fileInput).toBeInTheDocument();
  });

  it("shows an error message for invalid file type", async () => {
    render(<ImageClassifier />);
    const file = new File(["test image"], "test.gif", { type: "image/gif" });
    const fileInput = screen.getByLabelText(/Hasil/);

    fireEvent.change(fileInput, { target: { files: [file] } });
    const errorMessage = await screen.findByText(
      /Please select a valid image file/i
    );
    expect(errorMessage).toBeInTheDocument();
  });
});

import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe("Nav Component : ", () => {
  it("renders", () => {
    render(<Nav />);
  });

  it("matches snapshot DOM node structure", () => {
    // asFragment functionreturns a snapshot of the tested component
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Links are Visible", () => {
  it("inserts text into links", () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId("link")).toHaveTextContent("Tieso");
    expect(getByTestId("about")).toHaveTextContent("About");
    expect(getByTestId("portfolio")).toHaveTextContent("Portfolio");
    expect(getByTestId("contact")).toHaveTextContent("Contact");
  });
});

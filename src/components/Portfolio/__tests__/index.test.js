import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Portfolio from "..";

afterEach(cleanup);

describe("Portfolio Component : ", () => {
  it("renders", () => {
    render(<Portfolio />);
  });

  it("matches snapshot DOM node structure", () => {
    // asFragment functionreturns a snapshot of the tested component
    const { asFragment } = render(<Portfolio />);
    expect(asFragment()).toMatchSnapshot();
  });
});

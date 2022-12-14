import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("About Component", () => {
  it("renders", () => {
    render(<About />);
  });

  it("matches snapshot DOM node structure", () => {
    // asFragment functionreturns a snapshot of the tested component
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});

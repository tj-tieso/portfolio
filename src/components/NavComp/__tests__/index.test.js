import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

const navCategories = [{ name: "about" }];

const mockSetNavCategory = jest.fn();
const mockCurrentNavCategory = jest.fn();

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
    const { getByTestId } = render(
      <Nav
        navCategories={navCategories}
        setNavCategory={mockSetNavCategory}
        currentNavCategory={mockCurrentNavCategory}
      />
    );
    expect(getByTestId("link")).toHaveTextContent("Tieso");
    expect(getByTestId("about")).toHaveTextContent("About");
  });
});

import React from "react";
import { findAllByTestId, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../pages/index";

describe(Home.name, () => {
  it("should render successfully", () => {
    const context = render(<Home />);
    expect(context.container).toBeTruthy();
  });

  it("should display a list of habits on load", async () => {
    const container = render(<Home />).container;

    const habits = await findAllByTestId(container, "habit");
    expect(habits).toBeTruthy();
  });
});

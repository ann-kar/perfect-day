import React, { ReactNode } from "react";
import { findAllByRole, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import mockHabits from "../mocks/habits.json";
import Home from "../pages/index";
import { HabitsContext } from "../providers/HabitsProvider";

const TestProvider = (props: { children: ReactNode | ReactNode[] }) => {
  return (
    <HabitsContext.Provider value={mockHabits.data}>
      {props.children}
    </HabitsContext.Provider>
  );
};

describe(Home.name, () => {
  it("should render successfully", () => {
    const context = render(<Home />);
    expect(context.container).toBeTruthy();
  });

  it("should display a list of habits on load", async () => {
    const container = render(
      <TestProvider>
        <Home />
      </TestProvider>
    ).container;
    const habits = await findAllByRole(container, "listitem");
    expect(habits.length).toBe(8);
  });
});

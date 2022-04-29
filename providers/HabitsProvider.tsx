import { createContext } from "react";
import { IHabit } from "../interfaces/interfaces";

import mockHabits from "../mocks/habits.json";

export const HabitsContext = createContext<IHabit[] | null>(null);

export const HabitsProvider = ({ children }: any) => {
  return (
    <HabitsContext.Provider value={mockHabits.data}>
      {children}
    </HabitsContext.Provider>
  );
};

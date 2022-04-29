import { useContext } from "react";

import { IHabit } from "../interfaces/interfaces";
import { HabitsContext } from "../providers/HabitsProvider";
import { Habit } from "./Habit";

export const HabitList = () => {
  let habits = useContext(HabitsContext);

  const listHabits = () => {
    return habits?.map((habit: IHabit) => {
      return <Habit key={habit.id} habit={habit} />;
    });
  };
  return <ul>{listHabits()}</ul>;
};

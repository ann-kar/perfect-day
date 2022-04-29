import { useContext } from "react";
import { IHabit } from "../interfaces/interfaces";
import { HabitsContext } from "../providers/HabitsProvider";

export const HabitList = () => {
  let habits = useContext(HabitsContext);
  const listHabits = () => {
    return habits?.map((habit: IHabit) => {
      return (
        <li key={habit.id}>
          <h2>{habit.name}</h2>
          <h3>{habit.description}</h3>
          <div>Priority: {habit.priority}</div>
          {habit.created_at}
        </li>
      );
    });
  };
  return <ul>{listHabits()}</ul>;
};

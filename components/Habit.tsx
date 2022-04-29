import { IHabit } from "../interfaces/interfaces";

interface HabitProps {
    habit: IHabit;
}

export const Habit = ({habit}:HabitProps) => {
    return (
      <li>
        <h2>{habit.name}</h2>
        <h3>{habit.description}</h3>
        <div>Priority: {habit.priority}</div>
        {habit.created_at}
      </li>
    );
  }
  
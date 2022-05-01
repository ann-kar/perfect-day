import { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import { IMainTask } from "../interfaces/interfaces";

export const MainTask = () => {
  const [activeIndices, setActiveIndices] = useState([1, 2]);
  const [cellCount, setCellCount] = useState(6);
  const [mainTask, setMainTask] = useState<IMainTask>();

  useEffect(() => {
    const parts = new Array(cellCount).fill(1).map((cell, i) => {
      return { index: i, value: cell };
    });
    setMainTask({ activeIndices: [0], parts: parts });
  }, [cellCount]);

  const handleClick = (e: any) => {};
  return (
    <ResponsiveContainer width="100%" height="80%">
      <PieChart width={530} height={350}>
        <Pie
          data={mainTask?.parts}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={65}
          fill="#8884d8"
          onClick={(e) => handleClick(e)}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
{
}

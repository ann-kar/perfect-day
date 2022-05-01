import { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import { IMainTask } from "../interfaces/interfaces";
import produce from "immer";

export const MainTask = () => {
  const [activeIndices, setActiveIndices] = useState<Array<number>>([]);
  const [cellCount, setCellCount] = useState<number>(6);
  const [mainTask, setMainTask] = useState<IMainTask>();

  useEffect(() => {
    const cells = new Array(cellCount).fill(1).map((cell, i) => {
      return { index: i, value: cell };
    });
    setMainTask({ activeIndices: activeIndices, cells: cells });
  }, [cellCount, activeIndices]);

  const handleClick = (e: any) => {
    const temp = [...activeIndices];
    const cellIndex = e.index;
    const indexInActiveIndices = activeIndices.findIndex(
      (i) => i === cellIndex
    );

    if (indexInActiveIndices >= 0) {
      temp.splice(indexInActiveIndices, 1);
    } else {
      temp.push(cellIndex);
    }
    setActiveIndices(temp);

    setMainTask(
      produce((draft) => {
        if (draft) draft.activeIndices = temp;
      })
    );
  };

  return (
    <ResponsiveContainer width="100%" height="80%">
      <PieChart width={530} height={350}>
        <Pie
          data={mainTask?.cells}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={65}
          fill="#8884d8"
          onClick={(e) => handleClick(e)}>
          {mainTask?.cells.map((e, i) => (
            <Cell
              cursor="pointer"
              fill={activeIndices.includes(i) ? "#fafafa" : "#8884d8"}
              key={`cell-${i}`}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

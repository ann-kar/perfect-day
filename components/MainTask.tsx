import { useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const data02 = {
  activeIndices: [1, 2],
  parts: [
    {
      name: "Group A",
      value: 1,
    },
    {
      name: "Group B",
      value: 1,
    },
    {
      name: "Group C",
      value: 1,
    },
    {
      name: "Group D",
      value: 1,
    },
    {
      name: "Group E",
      value: 1,
    },
    {
      name: "Group F",
      value: 1,
    },
  ],
};
export const MainTask = () => {
  const [activeIndices, data] = useState([1, 2]);

  const handleClick = (e: any) => {
    console.log(e);
  };
  return (
    <ResponsiveContainer width="100%" height="80%">
      <PieChart width={530} height={350}>
        <Pie
          data={data02.parts}
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

import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const resultData = [
  {
    "id": 1,
    "name": "Alice",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "id": 2,
    "name": "Bob",
    "physics": 72,
    "chemistry": 81,
    "math": 75
  },
  {
    "id": 3,
    "name": "Charlie",
    "physics": 90,
    "chemistry": 88,
    "math": 95
  },
  {
    "id": 4,
    "name": "David",
    "physics": 65,
    "chemistry": 70,
    "math": 68
  },
  {
    "id": 5,
    "name": "Eva",
    "physics": 78,
    "chemistry": 84,
    "math": 80
  },
  {
    "id": 6,
    "name": "Frank",
    "physics": 88,
    "chemistry": 76,
    "math": 85
  },
  {
    "id": 7,
    "name": "Grace",
    "physics": 95,
    "chemistry": 92,
    "math": 98
  },
  {
    "id": 8,
    "name": "Helen",
    "physics": 80,
    "chemistry": 85,
    "math": 89
  },
  {
    "id": 9,
    "name": "Ian",
    "physics": 70,
    "chemistry": 65,
    "math": 72
  },
  {
    "id": 10,
    "name": "Jenny",
    "physics": 89,
    "chemistry": 90,
    "math": 93
  }
]



const ResultsChart = () => {
  return (
    <div>
      <LineChart width={900} height={500} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Line stroke="blue" dataKey="math"></Line>
        <Line stroke="purple" dataKey="chemistry"></Line>
        <Line stroke="green" dataKey="physics"></Line>
      </LineChart>
    </div>
  );
};

export default ResultsChart;

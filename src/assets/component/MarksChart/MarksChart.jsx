import React, { use } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  // console.log(marksDataRes)
  const marksData = marksDataRes.data;
  // console.log(marksData)
  // data processing for the chart
  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.student_id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
    };
    const avg = (student.physics + student.chemistry + student.math) / 3;
    student.avg = avg;

    return student;
  });

  console.log(marksChartData);
  return (
    <div>
      <BarChart width={900} height={300} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="avg" fill="purple"></Bar>
        <Bar dataKey="chemistry" fill="green"></Bar>
        <Bar dataKey="math" fill="skyblue"></Bar>
        <Bar dataKey="physics" fill="gray"></Bar>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default MarksChart;

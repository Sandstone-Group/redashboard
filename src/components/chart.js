import React, { PureComponent } from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import dataTest from "../dataProd/testData.json";

const Chart = () => {
  const data = dataTest;
  console.log(data);

  return (
    <div className="chart-background">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Week" />
        <YAxis label={{ value: "Rate", angle: -90, position: "left" }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="US30Y" stroke="black" dot={false} />
      </LineChart>
    </div>
  );
};

export default Chart;
